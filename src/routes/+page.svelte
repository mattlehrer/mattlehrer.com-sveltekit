<script lang="ts">
	import { title } from '$lib/config.js';
	import { formatDate } from '$lib/utils';
	import Posts from '$lib/layout/Posts.svelte';

	export let data;

	const MAX_POSTS = 3;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Posts posts={data.posts} {MAX_POSTS} />
