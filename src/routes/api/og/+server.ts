import { html as toReactNode } from 'satori-html';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import PlusJakartaSans from '$lib/components/og/PlusJakartaSans-Regular.ttf';
import type { RequestHandler } from './$types';
import Card from '$lib/components/og/OGCard.svelte';
import type { SvelteComponent } from 'svelte';

const width = 1200;
const height = 630;

export const GET: RequestHandler = async ({ url }) => {
	const title = url.searchParams.get('title') ?? undefined;
	const result = (Card as unknown as SvelteComponent).render({ title });
	const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(element, {
		fonts: [
			{
				name: 'Plus Jakarta Sans',
				data: Buffer.from(PlusJakartaSans),
				style: 'normal',
			},
		],
		height,
		width,
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width,
		},
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png',
		},
	});
};
