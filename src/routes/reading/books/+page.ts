import type { BookRating } from '$lib/types';

export async function load({ fetch }) {
	console.log('fetching bookwyrm book ratings');

	const response = await fetch('/api/bookwyrm');
	const json = (await response.json()) as { ratings: BookRating[] };
	const ratings = json.ratings as BookRating[];

	console.log(`fetched ${ratings && Array.isArray(ratings) ? ratings.length : 0} ratings`);

	return { ratings };
}
