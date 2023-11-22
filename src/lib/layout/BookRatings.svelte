<script lang="ts">
	import Rating from '$lib/components/BookRating.svelte';
	import DividerBehindHeading from '$lib/components/DividerBehindHeading.svelte';
	import type { BookRating } from '$lib/types';
	import { ArrowRight } from 'lucide-svelte';

	export let ratings: BookRating[];
</script>

<section class="wrapper pb-8 @container sm:pb-16" aria-labelledby="book-ratings-heading">
	<div class="full-bleed relative py-8 sm:py-16">
		<DividerBehindHeading />
		<h2 id="book-ratings-heading" class="relative flex justify-center">
			<span>Latest book ratings</span>
		</h2>
	</div>
	<div class="mt-8 flex flex-col gap-4 @container @3xl:flex-row @3xl:flex-wrap">
		{#each ratings as rating}
			<Rating {rating} />
		{/each}
	</div>
	<!-- div takes padding to align with the rest of the page  -->
	<div>
		<a
			href="/reading/books"
			class="tag-colors mt-8 flex max-w-max items-center rounded px-4 py-2 text-lg font-light hover:scale-110 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			>More book ratings <ArrowRight class="ml-2 inline-block" /></a
		>
	</div>
</section>
