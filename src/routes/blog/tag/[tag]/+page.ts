import type { Post } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const { tag } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json() as Post[];

	const posts = allPosts.filter((post: Post) => post.categories?.includes(tag));

	if (!posts.length) {
		error(404, `No posts found with tag '${tag}'`);
	}

	return {
		tag,
		posts,
	};
};
