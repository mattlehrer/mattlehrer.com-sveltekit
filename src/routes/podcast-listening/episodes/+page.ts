import type { EpisodeRecommendations } from '$lib/types.js';

export async function load({ fetch }) {
	const response = await fetch('/api/podcast-listening/recs');
	const podcastData = (await response.json()) as {
		recentRecs: EpisodeRecommendations;
	};
	return podcastData;
}
