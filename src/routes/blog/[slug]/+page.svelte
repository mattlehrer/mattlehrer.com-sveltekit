<script lang="ts">
	import { page } from '$app/stores';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose prose-lg prose-primary sm:prose-xl">
	<h1
		class="post-title text-4xl capitalize leading-[1.2] sm:text-6xl sm:leading-[1.1]"
		style={`view-transition-name: ${$page.params.slug}`}
	>
		{data.meta.title}
	</h1>

	<section class="mt-12">
		<svelte:component this={data.content} />
	</section>

	<section class="mt-12">
		<p class="font-extralight">Published {formatDate(data.meta.date)}</p>
		{#if data.meta.categories.length > 0}
			<div class="flex">
				{#each data.meta.categories as category}
					<a
						href="/"
						class="mr-4 mt-4 inline-block rounded bg-secondary-300 px-2 py-1 text-sm font-light text-tertiary-900 no-underline hover:bg-secondary-200"
						>{category}</a
					>
				{/each}
			</div>
		{/if}
	</section>
</article>
