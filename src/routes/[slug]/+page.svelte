<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-auto max-w-2xl">
	<h1 class="text-5xl capitalize sm:text-6xl">{data.meta.title}</h1>

	<section class="prose mt-12">
		<svelte:component this={data.content} />
	</section>

	<section class="mt-12">
		<p>Published {formatDate(data.meta.date)}</p>
		{#if data.meta.categories.length > 0}
			<div class="flex">
				{#each data.meta.categories as category}
					<a
						href="/"
						class="mr-4 mt-4 inline-block rounded bg-secondary-300 px-2 py-1 text-sm font-light text-tertiary-900 hover:bg-secondary-200"
						>{category}</a
					>
				{/each}
			</div>
		{/if}
	</section>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}
</style>
