import { json, type RequestHandler } from '@sveltejs/kit';
import overcastData from '$lib/overcast/overcast.opml?raw';
import { getRecentRecommendations, getRecentSubscriptions, parseOpml } from '$lib/overcast/parse';

const SUBS = 3;
const RECS = 4;

export const prerender = true;

export const GET = (async () => {
	const data = parseOpml(overcastData);

	const recentSubs = getRecentSubscriptions(data.opml.body.feeds.outline, SUBS);
	const recentRecs = getRecentRecommendations(data.opml.body.feeds.outline, RECS);

	return json({ recentSubs, recentRecs });
}) satisfies RequestHandler;
