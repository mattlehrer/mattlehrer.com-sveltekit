import type { RequestHandler } from './$types';

export const prerender = false;

export const GET: RequestHandler = async ({ request, url }) => {
	const accept = url.searchParams.get('url') || '';
	if (!accept) {
		return new Response('No image', { status: 400 });
	}

	const img_spec = url.search;

	return fetch(`https://wsrv.nl/${img_spec}&maxage=31d`, {
		headers: request.headers,
	});
};
