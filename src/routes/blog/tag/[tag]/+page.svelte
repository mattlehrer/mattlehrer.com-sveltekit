<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<article class="wrapper">
	<h1 class="text-4xl">Posts tagged <b>{data.tag}</b></h1>
	<ul class="mt-8 grid divide-y divide-primary-700">
		{#each data.posts as post}
			<li>
				<div>
					<a
						href={'/blog/' + post.slug}
						class="title text-lg font-semibold capitalize"
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
									class="mr-4 mt-4 inline-block rounded bg-secondary-300 px-2 py-1 text-sm font-light text-tertiary-900 hover:bg-secondary-200"
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
