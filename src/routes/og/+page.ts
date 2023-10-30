import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = ({ url }) => {
	return {
		title: url.searchParams.get('title') ?? 'Hello, world!',
	};
};
