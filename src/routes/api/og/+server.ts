import type { RequestHandler } from './$types';

export const prerender = false;

export const GET: RequestHandler = async ({ platform, url }) => {
	const title = url.searchParams.get('title') ?? undefined;

	const req = new Request(`https://mattlehrer.com/api/og/render?title=${title}`);

	const res = await platform?.env.OG_BROWSER.fetch(req);
	if (!res) {
		return new Response(null, { status: 500 });
	}
	const img = await res.arrayBuffer();

	return new Response(img, {
		headers: {
			'content-type': 'image/png',
		},
	}) as ReturnType<RequestHandler>;
};
