<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { url } from '$lib/config';

	export let data;

	const title = `Recent blog posts tagged ${data.tag}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta content="{url}api/og?title={title}" property="og:image" />
	<meta content={title} property="og:image:alt" />
</svelte:head>

<article class="wrapper">
	<h1 class="text-4xl">Posts tagged <b>{data.tag}</b></h1>
	<ul class="mt-8 grid divide-y divide-primary-700">
		{#each data.posts as post}
			<li>
				<div>
					<a
						href={'/blog/' + post.slug}
						class="text-lg font-semibold capitalize sm:text-xl"
						style={`view-transition-name: ${post.slug}`}>{post.title}</a
					>
					<p class="font-extralight text-primary-900">{formatDate(post.date)}</p>
					{#if post.description}
						<p class="mt-3">{post.description}</p>
					{/if}
					{#if post.categories && post.categories.length > 0}
						<div class="flex">
							{#each post.categories as category}
								<a
									href={'/blog/tag/' + category}
									class="tag-colors mr-4 mt-4 inline-block rounded px-2 py-1 text-sm font-light"
									>{category}</a
								>
							{/each}
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</article>

<style lang="postcss">
	li > div {
		margin-block: 1.5rem;
	}

	li:first-child > div {
		margin-top: 0;
	}
</style>
