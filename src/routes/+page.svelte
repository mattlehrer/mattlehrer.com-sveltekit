<script lang="ts">
	import { description, title, url } from '$lib/config.js';
	import Hero from '$lib/layout/Hero.svelte';
	import Projects from '$lib/layout/ProjectCards.svelte';
	import Posts from '$lib/layout/Posts.svelte';

	export let data;

	const MAX_POSTS = 2;
</script>

<svelte:head>
	<title>{title}</title>
	<meta content="{url}api/og?title={description}" property="og:image" />
	<meta content={description} property="og:image:alt" />
</svelte:head>

<Hero />

<Projects />

<Posts posts={data.posts} {MAX_POSTS} />
