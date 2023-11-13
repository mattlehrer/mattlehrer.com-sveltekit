import type { EpisodeRecommendations, FeedSubscriptions } from '$lib/types.js';

export async function load({ fetch }) {
	const response = await fetch('/api/podcast-listening/recs-and-subs');
	const podcastData = (await response.json()) as {
		recentSubs: FeedSubscriptions;
		recentRecs: EpisodeRecommendations;
	};
	return podcastData;
}
