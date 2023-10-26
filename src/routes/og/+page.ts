import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	return {
		title: url.searchParams.get('title') ?? 'Hello, world!',
	};
};
