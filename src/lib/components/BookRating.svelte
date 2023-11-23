<script lang="ts">
	import type { BookRating } from '$lib/types';
	import { Star, StarHalf } from 'lucide-svelte';
	import { clickoutside } from '@svelte-put/clickoutside';

	export let rating: BookRating;

	let isReviewOpen = false;

	/**
	 * export type BookRating = {
			id: string;
			posted: string;
			rating: number;
			title: string;
			subtitle: string;
			description: string;
			authors: string[];
			reviewTitle?: string;
			reviewContent?: string;
			cover?: string;
		};
	*/

	const listFormatter = new Intl.ListFormat(undefined, {
		style: 'long',
		type: 'conjunction',
	});
</script>

<article
	class="flex min-w-[98%] max-w-min flex-col rounded-sm bg-primary-200 px-1 py-4 shadow-inner sm:min-w-[24ch] sm:py-6"
>
	{#if rating.cover}
		<a href={rating.id} class="group focus-visible:outline-none">
			<img
				loading="lazy"
				class="mx-auto mb-6 h-40 shadow-xl transition-transform hover:-translate-y-8 hover:scale-125 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-700 sm:h-60"
				src={rating.cover}
				alt="{rating.title} cover"
			/>
		</a>
	{:else}
		<div
			class="mx-auto mb-6 grid h-40 w-24 place-content-center bg-tertiary-800 p-4 text-center text-tertiary-400 shadow-xl sm:h-60 sm:w-40"
		>
			Cover unavailable
		</div>
	{/if}
	<div class="px-1 sm:px-3">
		<h2 class="mb-5 text-center sm:text-lg">
			<span class="mr-1 italic">
				{rating.title}
			</span>
			by {listFormatter.format(rating.authors)}
		</h2>
		{#if rating.reviewTitle}
			<details
				use:clickoutside
				on:clickoutside={() => (isReviewOpen = false)}
				class="cursor-pointer pb-5"
				bind:open={isReviewOpen}
			>
				<summary
					class="mb-2 ml-4 list-outside rounded font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 sm:ml-2"
				>
					{rating.reviewTitle}
				</summary>
				<div
					class="prose prose-primary absolute z-20 -ml-1 mt-2 max-h-72 min-w-[16ch] max-w-[90%] overflow-y-auto rounded-sm bg-primary-300 p-2 text-sm font-light shadow-lg prose-a:text-tertiary-700 prose-a:decoration-primary-500 prose-a:decoration-[0.25em] prose-a:underline-offset-[0.125em] hover:prose-a:text-tertiary-50 hover:prose-a:decoration-tertiary-500 hover:prose-a:decoration-[1.125em] hover:prose-a:underline-offset-[-0.875em] focus-visible:prose-a:rounded-sm focus-visible:prose-a:outline focus-visible:prose-a:outline-2 focus-visible:prose-a:outline-offset-2 focus-visible:prose-a:outline-tertiary-500 sm:ml-0 sm:w-[24ch] sm:max-w-[24ch] sm:p-3 sm:text-base"
				>
					{@html rating.reviewContent}
				</div>
			</details>
		{/if}
	</div>
	<div class="mx-auto mt-auto px-1 transition-all hover:scale-125 sm:px-0">
		<a
			class="flex justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
			href={rating.id}
		>
			{#each new Array(Math.floor(rating.rating)) as _}
				<Star class="h-5 w-5 fill-primary-600 text-primary-600 sm:h-6 sm:w-6" />
			{/each}
			{#if Math.floor(rating.rating) !== rating.rating}
				<Star
					class="absolute h-5 w-5 text-primary-600 sm:h-6 sm:w-6"
					style="translate: {100 * (rating.rating - 2.5)}%;"
				/>
				<StarHalf class="h-5 w-5 fill-primary-600 text-primary-600 sm:h-6 sm:w-6" />
			{/if}
			{#each new Array(5 - Math.ceil(rating.rating)) as _}
				<Star class="h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
			{/each}
			<p class="sr-only">{rating.rating} stars</p>
		</a>
	</div>
</article>
