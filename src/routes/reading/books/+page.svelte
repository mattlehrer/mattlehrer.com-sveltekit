<script lang="ts">
	import type { BookRating } from '$lib/types';
	import { onMount } from 'svelte';
	import Rating from './Rating.svelte';

	let ratings: BookRating[] = [];
	let isLoading = true;

	async function* getBookRatings() {
		let next: string | null = '1';
		while (next) {
			const response = await fetch('/api/bookwyrm/' + next);
			const json = (await response.json()) as { ratings: BookRating[]; next: string | null };
			if (json.next) {
				next = (json.next as string).slice(
					'https://bookwyrm.social/user/mattlehrer/outbox?page='.length,
				);
			} else {
				next = json.next;
			}
			yield json.ratings as BookRating[];
		}
	}

	onMount(async () => {
		for await (const items of getBookRatings()) {
			ratings = ratings.concat(items);
		}
		isLoading = false;
	});
</script>

<article class="w-full">
	<h1 class="mb-4 mt-8 px-6 text-4xl sm:px-16 sm:text-5xl">Recent Book Ratings and Reviews</h1>
	<p class="mb-4 max-w-4xl px-6 text-lg sm:px-16 sm:text-xl">
		I use <a href="https://joinbookwyrm.org">Bookwyrm</a> to keep track of my book and audiobook
		consumption. You can check out <a href="https://bookwyrm.social/user/mattlehrer">my profile</a>,
		and lists of my
		<a href="https://bookwyrm.social/list/1047/s/favorite-fiction">favorite fiction</a>
		and <a href="https://bookwyrm.social/list/1039/s/favorite-non-fiction">non-fiction</a> there. The
		books that I've rated or written a review about will load from Bookwyrm below.
	</p>
	<div class="mx-auto flex flex-wrap gap-2 p-3 sm:gap-4 sm:p-16">
		{#each ratings as rating}
			<Rating {rating} />
		{/each}
	</div>
	{#if isLoading}
		<svg
			class="mx-auto mt-4 h-6 w-6 animate-spin text-primary-700"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	{/if}
</article>
