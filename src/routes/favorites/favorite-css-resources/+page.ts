import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load() {
	try {
		const post = await import(`./favorite-css-resources.md`);

		return {
			content: post.default,
			meta: post.metadata,
		};
	} catch (e) {
		error(404, `Could not find the post`);
	}
}
