<script lang="ts">
	import { url } from '$lib/config';
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

<svelte:head>
	<title>Matt Lehrer's recent book and audiobook reviews</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Matt Lehrer's recent book and audiobook reviews" />
	<meta
		content="{url}api/og?title=Matt Lehrer's recent book and audiobook reviews"
		property="og:image"
	/>
	<meta content="Matt Lehrer's recent book and audiobook reviews" property="og:image:alt" />
</svelte:head>

<article
	class="flex min-w-[98%] max-w-min flex-col rounded-sm bg-primary-200 px-1 py-4 shadow-inner sm:min-w-[24ch] sm:py-6"
>
	{#if rating.cover}
		<a href={rating.id}>
			<img
				loading="lazy"
				class="mx-auto mb-6 h-40 shadow-xl transition-all hover:-translate-y-8 hover:scale-125 sm:h-60"
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
			<details class="cursor-pointer pb-5">
				<summary class="mb-2 ml-4 list-outside font-medium sm:ml-2">
					{rating.reviewTitle}
				</summary>
				<div
					class="prose prose-primary absolute z-20 -ml-1 mt-2 w-[16ch] rounded-sm bg-primary-300 p-2 text-sm font-light shadow-lg sm:ml-0 sm:w-[26ch] sm:p-3 sm:text-base"
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
				<Star class="absolute h-5 w-5 translate-x-full text-primary-600 sm:h-6 sm:w-6" />
				<StarHalf class="h-5 w-5 fill-primary-600 text-primary-600 sm:h-6 sm:w-6" />
			{/if}
			{#each new Array(5 - Math.ceil(rating.rating)) as _}
				<Star class="h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
			{/each}
			<p class="sr-only">{rating.rating} stars</p>
		</a>
	</div>
</article>
