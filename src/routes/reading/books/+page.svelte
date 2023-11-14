<script lang="ts">
	import Rating from './Rating.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="w-full">
	<h1 class="mb-4 mt-8 px-6 text-4xl sm:px-16 sm:text-5xl">Recent Book Ratings and Reviews</h1>
	<p class="mb-4 max-w-4xl px-6 text-lg sm:px-16 sm:text-xl">
		I use <a href="https://joinbookwyrm.org">Bookwyrm</a> to keep track of my book and audiobook
		consumption. You can check out <a href="https://bookwyrm.social/user/mattlehrer">my profile</a>
		and lists of my
		<a href="https://bookwyrm.social/list/1047/s/favorite-fiction">favorite fiction</a>
		and <a href="https://bookwyrm.social/list/1039/s/favorite-non-fiction">non-fiction</a> there. The
		books that I've rated or written a review about will load from Bookwyrm below.
	</p>
	<div
		class="mx-auto grid grid-cols-2 justify-items-center gap-2 p-6 sm:flex sm:flex-wrap sm:gap-4 sm:p-16"
	>
		{#each data.ratings as rating}
			<Rating {rating} />
		{/each}
	</div>
</article>
