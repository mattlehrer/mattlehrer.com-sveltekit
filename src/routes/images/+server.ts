import type { RequestHandler } from './$types';

export const prerender = false;

export const GET: RequestHandler = async ({ request, url }) => {
	let img = url.searchParams.get('img') || '';
	if (!img) {
		return new Response('No image', { status: 400 });
	}
	const isOC = url.searchParams.get('oc') === '1';
	if (isOC) {
		img = 'public.overcast-cdn.com/art/' + img;
	}

	let response = await fetch(`https://wsrv.nl/?url=${img}`, {
		headers: request.headers,
	});
	const headers = new Headers(response.headers);
	headers.set('cache-control', 'public, max-age=31536000');
	headers.set('vary', 'Accept');
	response = new Response(response.body, { ...response, headers });

	return response;
};
