<script lang="ts">
	import type { BookRating } from '$lib/types';
	import { onMount } from 'svelte';
	import Rating from './Rating.svelte';

	let ratings: BookRating[] = [];

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
	});
</script>

<article class="w-full">
	<h1 class="mb-4 mt-8 px-6 text-4xl sm:px-16 sm:text-5xl">Recent Book Ratings and Reviews</h1>
	<div class="mx-auto flex flex-wrap gap-2 p-3 sm:gap-4 sm:p-16">
		{#each ratings as rating}
			<Rating {rating} />
		{/each}
	</div>
</article>
