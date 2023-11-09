import clone from 'just-clone';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { BookRating, BookwyrmAuthor, BookwyrmBook, BookwyrmOutbox } from '$lib/types';

const fetchOptions = {
	cf: {
		// cacheTtl: 60 * 60 * 24 * 30, // 30 days
		cacheTtl: 60 * 60 * 24, // 1 day
		cacheEverything: true,
	},
	headers: {
		Accept: 'application/json',
	},
};

export const GET: RequestHandler = async ({ params }) => {
	const url = `https://bookwyrm.social/user/mattlehrer/outbox?page=${params.page}`;
	const response = await fetch(url);
	const { orderedItems: items, next } = (await response.json()) as BookwyrmOutbox;

	const ratings: BookRating[] = [];

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

				console.log(item.id, JSON.stringify(rating, null, 2));

				ratings.push(rating);
			} catch (error) {
				console.error('Error fetching rating info: ', item.id, error);
			}
		}
	}
	return json({ ratings, next });
};