import type { Post } from '$lib/types.js';

export const load = async ({ fetch, params }) => {
	const { tag } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post: Post) => post.categories?.includes(tag));

	return {
		tag,
		posts,
	};
};
