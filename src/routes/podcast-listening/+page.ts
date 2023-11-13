import type { EpisodeRecommendations, FeedSubscriptions } from '$lib/types.js';

export async function load({ fetch }) {
	const response = await fetch('/api/podcast-listening?subs=3&recs=4');
	const podcastData = (await response.json()) as {
		recentSubs: FeedSubscriptions;
		recentRecs: EpisodeRecommendations;
	};
	return podcastData;
}
