import type { BookRating, EpisodeRecommendation, Post } from '$lib/types';

export async function load({ fetch }) {
	const postsResponse = await fetch('api/posts');
	const posts: Post[] = await postsResponse.json();

	const bookRatingsResponse = await fetch('api/bookwyrm?limit=3');
	const bookRatings: { ratings: BookRating[] } = await bookRatingsResponse.json();

	const episodeResponse = await fetch('api/podcast-listening/recs?limit=2');
	const podcastRecommendations: { recentRecs: EpisodeRecommendation[] } =
		await episodeResponse.json();

	return {
		posts,
		bookRatings: bookRatings.ratings,
		podcastRecommendations: podcastRecommendations.recentRecs,
	};
}
