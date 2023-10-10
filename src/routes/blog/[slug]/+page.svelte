<script lang="ts">
	import { page } from '$app/stores';
	import Tags from '$lib/components/Tags.svelte';
	import { title } from '$lib/config.js';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose prose-lg prose-primary mb-4 mt-8 sm:prose-xl">
	<h1
		class="post-title text-4xl capitalize leading-[1.2] sm:text-6xl sm:leading-[1.1]"
		style={`view-transition-name: ${$page.params.slug}`}
	>
		{data.meta.title}
	</h1>

	<section class="mt-12">
		<svelte:component this={data.content} />
	</section>

	<hr class="mx-auto w-2/3 rounded-full border-2 border-tertiary-600" />

	<section class="mt-12">
		<p class="my-0 font-extralight">Published {formatDate(data.meta.date)}</p>
		{#if data.meta.categories?.length > 0}
			<Tags tags={data.meta.categories} />
		{/if}
	</section>
</article>
