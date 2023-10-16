<script lang="ts">
	import DividerBehindHeading from '$lib/components/DividerBehindHeading.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import { ArrowRight } from 'lucide-svelte';

	export let posts: Post[] = [];
	export let MAX_POSTS = 3;
</script>

<section class="wrapper pb-8 sm:pb-16" aria-labelledby="recent-posts-heading">
	<div class="full-bleed relative py-8 sm:py-16">
		<DividerBehindHeading />
		<h2 id="recent-posts-heading" class="relative flex justify-center">
			<span>Recent blog posts</span>
		</h2>
	</div>
	<ul class="mt-8 grid divide-y divide-tertiary-600">
		{#each posts.slice(0, MAX_POSTS) as post}
			<li>
				<div>
					<a
						href={'/blog/' + post.slug}
						class="text-lg font-medium capitalize focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary-500 sm:text-xl"
						style={`view-transition-name: ${post.slug}`}>{post.title}</a
					>
					<p class="mt-2 font-extralight text-primary-900">{formatDate(post.date)}</p>
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
		<!-- div takes padding to align with the rest of the page  -->
		<div>
			<a
				href="/blog"
				class="tag-colors mt-8 flex max-w-max items-center rounded px-4 py-2 text-lg font-light hover:scale-110 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
				>All Posts <ArrowRight class="ml-2 inline-block" /></a
			>
		</div>
	{/if}
</section>

<style lang="postcss">
	li > div {
		margin-block: 1.75rem;
	}

	li:first-child > div {
		margin-top: 0;
	}
</style>
