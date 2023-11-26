import clone from 'just-clone';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { BookRating, BookwyrmAuthor, BookwyrmBook, BookwyrmOutbox } from '$lib/types';
import { dev } from '$app/environment';
import { dev_mode_ratings } from '$lib/devdata/bookwyrm';

type Fetch = typeof fetch;

const fetchOptions = {
	cf: {
		cacheTtl: 60 * 60 * 24 * 30, // 30 days
		// cacheTtl: 60 * 60 * 24, // 1 day
		cacheEverything: true,
	},
	headers: {
		Accept: 'application/json',
	},
};

export const GET = (async ({ fetch }) => {
	if (dev && dev_mode_ratings?.length) {
		return json({ ratings: dev_mode_ratings });
	}

	let ratings: BookRating[] = [];
	for await (const items of getBookRatings(fetch)) {
		// Remove description to save bandwidth
		for (const item of items) {
			delete item.description;
		}
		ratings = ratings.concat(items);
		if (dev && ratings.length) break;
	}

	return json({ ratings });
}) satisfies RequestHandler;

async function* getBookRatings(fetch: Fetch) {
	let next: string | null = 'https://bookwyrm.social/user/mattlehrer/outbox?page=1';
	let ratingsFromPage: BookRating[] = [];

	while (next) {
		({ ratingsFromPage, next } = await getBookwyrmPage(next, fetch));
		yield ratingsFromPage as BookRating[];
	}
}

async function getBookwyrmPage(url: string, fetch: Fetch) {
	const response = await fetch(url, {
		headers: {
			Accept: 'application/json',
		},
	});
	const { orderedItems: items, next } = (await response.json()) as BookwyrmOutbox;

	const ratingsFromPage: BookRating[] = [];

	for (const item of items) {
		if (item.rating) {
			try {
				let book = (await fetch(item.inReplyToBook, fetchOptions).then((res) =>
					res.json(),
				)) as BookwyrmBook;

				let edition;

				if (book && book.type === 'Edition') {
					edition = clone(book);

					book = (await fetch(book.work, fetchOptions).then((res) => res.json())) as BookwyrmBook;
				}

				const authors: BookwyrmAuthor[] = [];
				const authorsUrls = edition?.authors ?? book.authors;
				for (const authorUrl of authorsUrls) {
					const author = (await fetch(authorUrl, fetchOptions).then((res) =>
						res.json(),
					)) as BookwyrmAuthor;
					authors.push(author);
				}

				const split = 'stars): ';
				const title =
					item.type === 'Article'
						? item.name.slice(item.name.indexOf(split) + split.length)
						: undefined;

				// TODO: cache cover images on R2

				const rating: BookRating = {
					id: item.id,
					posted: item.published,
					rating: item.rating,
					title: edition?.title ?? book.title,
					subtitle: edition?.subtitle ?? book.subtitle,
					description: edition?.description ?? book.description,
					authors: authors.map((author) => author.name),
					reviewTitle: title,
					reviewContent: item.type === 'Article' ? item.content : undefined,
					cover: edition?.cover?.url ?? book.cover?.url,
				};

				if (dev) console.log(item.id, JSON.stringify(rating, null, 2));

				ratingsFromPage.push(rating);
			} catch (error) {
				console.error('Error fetching rating info: ', item.id, error);
			}
		}
	}
	return { ratingsFromPage, next };
}
