import type { BookRating } from '$lib/types';

export async function load({ fetch }) {
	const skFetch = fetch;

	async function* getBookRatings() {
		let next: string | null = '1';
		while (next) {
			const response = await skFetch('/api/bookwyrm/' + next);
			const json = (await response.json()) as { ratings: BookRating[]; next: string | null };
			if (json.next) {
				next = (json.next as string).slice(
					'https://bookwyrm.social/user/mattlehrer/outbox?page='.length,
				);
			} else {
				next = json.next;
			}
			yield json.ratings as BookRating[];
		}
	}

	let ratings: BookRating[] = [];
	for await (const items of getBookRatings()) {
		ratings = ratings.concat(items);
	}

	return { ratings };
}
