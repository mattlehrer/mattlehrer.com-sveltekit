import { ImageResponse } from '@cloudflare/pages-plugin-vercel-og/api';
import Card from '$lib/components/og/OGCard.svelte';
import type { RequestHandler } from './$types';
import { html as toReactNode } from 'satori-html';
import type { SvelteComponent } from 'svelte';

export const prerender = false;

const width = 1200;
const height = 630;

export const GET: RequestHandler = async ({ url }) => {
	const title = url.searchParams.get('title') ?? undefined;
	const result = (Card as unknown as SvelteComponent).render({ title });
	const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	return new ImageResponse(element, {
		width: width,
		height: height,
		headers: {
			'content-type': 'image/png',
		},
	}) as ReturnType<RequestHandler>;
};
