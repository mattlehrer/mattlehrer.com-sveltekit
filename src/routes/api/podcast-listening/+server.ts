import { json, type RequestHandler } from '@sveltejs/kit';
import overcastData from '$lib/overcast/overcast.opml?raw';
import { getRecentRecommendations, getRecentSubscriptions, parseOpml } from '$lib/overcast/parse';

export const prerender = true;

export const GET: RequestHandler = async ({ url }) => {
	const subs = Number(url.searchParams.get('subs') ?? '0');
	const recs = Number(url.searchParams.get('recs') ?? '0');

	if (subs <= 0 && recs <= 0) return json({ recentSubs: [], recentRecs: [] });

	const data = parseOpml(overcastData);

	const recentSubs = getRecentSubscriptions(data.opml.body.feeds.outline, subs);
	const recentRecs = getRecentRecommendations(data.opml.body.feeds.outline, recs);

	return json({ recentSubs, recentRecs });
};
