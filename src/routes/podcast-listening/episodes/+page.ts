import type { EpisodeRecommendations } from '$lib/types.js';

export async function load({ fetch }) {
	const response = await fetch('/api/podcast-listening?recs=500');
	const podcastData = (await response.json()) as {
		recentSubs: [];
		recentRecs: EpisodeRecommendations;
	};
	return podcastData;
}
