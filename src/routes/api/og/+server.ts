import type { RequestHandler } from './$types';

export const prerender = false;

export const GET = (async ({ platform, url }) => {
	const title = url.searchParams.get('title') ?? undefined;

	const req = new Request(`${url.origin}/api/og/render?title=${title}`);

	const res = await platform?.env.OG_BROWSER.fetch(req);
	if (!res) {
		return new Response(null, { status: 500 });
	}
	try {
		const img = await res.arrayBuffer();
		if (img) {
			return new Response(img, {
				headers: {
					'content-type': 'image/png',
					'cache-control': 'public, max-age=604800, immutable',
				},
			}) as ReturnType<RequestHandler>;
		}
	} catch (error) {
		console.error('Error generating image', error);
	}
	return new Response(null, { status: 500 });
}) satisfies RequestHandler;
