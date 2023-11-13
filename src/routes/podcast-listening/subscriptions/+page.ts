import type { FeedSubscriptions } from '$lib/types.js';

export async function load({ fetch }) {
	const response = await fetch('/api/podcast-listening/subs');
	const podcastData = (await response.json()) as {
		recentSubs: FeedSubscriptions;
	};
	return podcastData;
}
