import { json, type RequestHandler } from '@sveltejs/kit';
import overcastData from '$lib/overcast/overcast.opml?raw';
import { getRecentRecommendations, parseOpml } from '$lib/overcast/parse';

const RECS = 500;

export const prerender = true;

export const GET = (async () => {
	const data = parseOpml(overcastData);

	const recentRecs = getRecentRecommendations(data.opml.body.feeds.outline, RECS);

	return json({ recentRecs });
}) satisfies RequestHandler;
