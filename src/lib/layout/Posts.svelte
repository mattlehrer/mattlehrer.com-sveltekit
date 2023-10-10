<script lang="ts">
	import Tags from '$lib/components/Tags.svelte';
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import { ArrowRight } from 'lucide-svelte';

	export let posts: Post[] = [];
	export let MAX_POSTS = 3;
</script>

<section>
	<h2 class="text-2xl tracking-tight sm:text-4xl">Recent blog posts</h2>
	<ul class="mt-8 grid divide-y divide-tertiary-600">
		{#each posts.slice(0, MAX_POSTS) as post}
			<li>
				<div>
					<a
						href={'/blog/' + post.slug}
						class="text-lg font-semibold capitalize"
						style={`view-transition-name: ${post.slug}`}>{post.title}</a
					>
					<p class="font-extralight text-primary-900">{formatDate(post.date)}</p>
					{#if post.description}
						<p class="mt-3">{post.description}</p>
					{/if}
					{#if post.categories?.length > 0}
						<Tags tags={post.categories} />
					{/if}
				</div>
			</li>
		{/each}
	</ul>
	{#if posts.length > MAX_POSTS}
		<a
			href="/blog"
			class="mt-8 flex max-w-max items-center rounded bg-secondary-300 px-4 py-2 text-lg font-light text-tertiary-900 hover:bg-secondary-200"
			>All Posts <ArrowRight class="ml-2 inline-block" /></a
		>
	{/if}
</section>

<style lang="postcss">
	li > div {
		margin-block: 1.5rem;
	}

	li:first-child > div {
		margin-top: 0;
	}
</style>
