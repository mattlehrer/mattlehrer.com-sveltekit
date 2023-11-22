<script lang="ts">
	import { page } from '$app/stores';
	import Tags from '$lib/components/Tags.svelte';
	import { title } from '$lib/config.js';
	import { formatDate } from '$lib/utils';
	import { url } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta content="{url}api/og?title={data.meta.title}" property="og:image" />
	<meta content={data.meta.title} property="og:image:alt" />
</svelte:head>

<div class="mb-4 mt-8">
	<div class="wrapper">
		<article
			class="prose prose-lg prose-primary duration-300 ease-out sm:prose-xl prose-a:text-tertiary-700 prose-a:decoration-primary-500 prose-a:decoration-[0.25em] prose-a:underline-offset-[0.125em] hover:prose-a:text-tertiary-50 hover:prose-a:decoration-tertiary-500 hover:prose-a:decoration-[1.125em] hover:prose-a:underline-offset-[-0.875em] focus-visible:prose-a:rounded-sm focus-visible:prose-a:outline focus-visible:prose-a:outline-2 focus-visible:prose-a:outline-offset-2 focus-visible:prose-a:outline-tertiary-500 prose-li:mb-4 prose-li:leading-7"
		>
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

			<section class="not-prose mt-12">
				<p class="my-0 font-extralight">Published {formatDate(data.meta.date)}</p>
				{#if data.meta.categories?.length > 0}
					<Tags tags={data.meta.categories} />
				{/if}
			</section>
		</article>
	</div>
</div>
