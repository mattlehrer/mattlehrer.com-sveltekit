<script lang="ts">
	import { title } from '$lib/config.js';
	import Hero from '$lib/layout/Hero.svelte';
	import Posts from '$lib/layout/Posts.svelte';

	export let data;

	const MAX_POSTS = 3;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Hero />

<Posts posts={data.posts} {MAX_POSTS} />
