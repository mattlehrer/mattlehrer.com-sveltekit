import { json, type RequestHandler } from '@sveltejs/kit';
import overcastData from '$lib/overcast/overcast.opml?raw';
import { getRecentSubscriptions, parseOpml } from '$lib/overcast/parse';

const SUBS = 500;

export const prerender = true;

export const GET: RequestHandler = async () => {
	const data = parseOpml(overcastData);

	const recentSubs = getRecentSubscriptions(data.opml.body.feeds.outline, SUBS);

	return json({ recentSubs });
};
