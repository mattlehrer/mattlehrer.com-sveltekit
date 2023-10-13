<script lang="ts">
	import Tags from '$lib/components/Tags.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<section class="wrapper">
	<h1 class="text-3xl sm:text-5xl">Recent blog posts</h1>
	<ul class="mt-8 grid divide-y divide-primary-700 sm:mt-16">
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
					{#if post.categories?.length > 0}
						<Tags tags={post.categories} />
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	li > div {
		margin-block: 1.5rem;
	}

	li:first-child > div {
		margin-top: 0;
	}
</style>
