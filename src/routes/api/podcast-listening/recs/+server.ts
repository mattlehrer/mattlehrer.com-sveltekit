import { json, type RequestHandler } from '@sveltejs/kit';
import overcastData from '$lib/overcast/overcast.opml?raw';
import { getRecentRecommendations, parseOpml } from '$lib/overcast/parse';

const RECS = 500;

export const prerender = true;

export const GET = (async ({ url }) => {
	const limit = Number(url.searchParams.get('limit')) || RECS;
	const data = parseOpml(overcastData);

	const recentRecs = getRecentRecommendations(data.opml.body.feeds.outline, limit);

	return json({ recentRecs });
}) satisfies RequestHandler;
