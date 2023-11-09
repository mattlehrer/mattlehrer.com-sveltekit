<script lang="ts">
	import type { BookRating } from '$lib/types';
	import { Star, StarHalf } from 'lucide-svelte';
	export let rating: BookRating;

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
	class="flex min-w-[15ch] max-w-min flex-col rounded-sm bg-primary-200 px-1 py-4 shadow-inner sm:min-w-[24ch] sm:py-6"
>
	{#if rating.cover}
		<a href={rating.id}>
			<img
				loading="lazy"
				class="mx-auto mb-6 h-36 shadow-xl transition-all hover:-translate-y-8 hover:scale-125 sm:h-60"
				src={rating.cover}
				alt="{rating.title} cover"
			/>
		</a>
	{/if}
	<div class="px-1 sm:px-3">
		<h2 class="mb-5 text-center sm:text-lg">
			<span class="mr-1 italic">
				{rating.title}
			</span>
			by {listFormatter.format(rating.authors)}
		</h2>
		{#if rating.reviewTitle}
			<details class="relative cursor-pointer pb-5">
				<summary class="mb-2 ml-2 list-outside font-medium">
					{rating.reviewTitle}
				</summary>
				<div
					class="prose prose-primary absolute mt-2 w-[26ch] rounded-sm bg-primary-300 p-4 font-light shadow-lg"
				>
					{@html rating.reviewContent}
				</div>
			</details>
		{/if}
	</div>
	<div class="mt-auto w-full px-1 transition-all hover:scale-125 sm:px-0">
		<a class="flex justify-center" href={rating.id}>
			{#each new Array(Math.floor(rating.rating)) as _}
				<Star class="h-5 w-5 fill-primary-600 text-primary-600 sm:h-6 sm:w-6" />
			{/each}
			{#if Math.floor(rating.rating) !== rating.rating}
				<StarHalf class="h-5 w-5 fill-primary-600 text-primary-600 sm:h-6 sm:w-6" />
			{/if}
			{#each new Array(5 - Math.floor(rating.rating)) as _}
				<Star class="h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
			{/each}
		</a>
	</div>
</article>
