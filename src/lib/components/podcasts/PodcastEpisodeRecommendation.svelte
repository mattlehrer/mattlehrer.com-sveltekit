<script lang="ts">
	import { audioPlaying } from '$lib/stores';
	import type { EpisodeRecommendation } from '$lib/types';
	import { decodeHtml } from '$lib/utils';
	import { ExternalLink } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let episode: EpisodeRecommendation;
	export let isPaused = true;

	let errorMsg: undefined | string = undefined;
	let readyState = 0;
	// @ts-expect-error - getting node types but this is only in the browser and window.setTimeout is not working as a type
	let loadingMetadataTimer = undefined;

	onMount(() => {
		loadingMetadataTimer = setTimeout(() => {
			if (readyState === 0) {
				handleError();
			}
		}, 15000);
	});

	$: if ($audioPlaying) {
		isPaused = $audioPlaying !== episode.enclosureUrl;
		if (!isPaused) loadMediaSession(episode);
	}

	$: if (readyState >= 1) {
		// @ts-expect-error - as above
		clearTimeout(loadingMetadataTimer);
		errorMsg = undefined;
	}

	function handlePlay() {
		$audioPlaying = episode.enclosureUrl;
		isPaused = false;
	}

	function handlePause() {
		$audioPlaying = null;
		isPaused = true;
	}

	function handleError() {
		$audioPlaying = null;
		isPaused = true;
		errorMsg =
			"There was a problem loading the audio file from the publisher. It's possible this episode has been removed or is now behind a paywall.";
		console.log('Error loading audio file for episode', episode.title);
	}

	function loadMediaSession(episode: EpisodeRecommendation) {
		if (!('mediaSession' in navigator)) return;

		navigator.mediaSession.metadata = new MediaMetadata({
			title: episode.title,
			artist: episode.feedTitle,
			artwork: [
				{
					src: `/images/?url=public.overcast-cdn.com/art/${episode.overcastFeedId}&w=128&output=png&we`,
					sizes: '128x128',
					type: 'image/png',
				},
				{
					src: `/images/?url=public.overcast-cdn.com/art/${episode.overcastFeedId}&w=512&output=png&we`,
					sizes: '512x512',
					type: 'image/png',
				},
			],
		});
	}
</script>

<article
	class="flex w-full flex-col justify-between gap-2 rounded-sm bg-primary-200 p-4 shadow-inner sm:max-w-[40ch] sm:p-6"
>
	<div class="flex gap-4 sm:gap-6">
		<picture>
			<source
				srcset={`/images/?url=public.overcast-cdn.com/art/${episode.overcastFeedId}&w=128&output=webp&we`}
				type="image/webp"
			/>
			<img
				src={`/images/?url=public.overcast-cdn.com/art/${episode.overcastFeedId}&w=128&output=jpg&we`}
				alt={`Cover art for ${episode.feedTitle}`}
				loading="lazy"
				class="h-20 w-20 max-w-none sm:h-28 sm:w-28"
			/>
		</picture>
		<div class="flex w-full flex-col">
			<div class="flex items-start justify-between">
				<h3 class="text-lg font-bold leading-[1.33em]">{decodeHtml(episode.title)}</h3>
				<a
					href={episode.url}
					class="-m-1 rounded-lg p-1 opacity-80 hover:scale-125 hover:bg-primary-800 hover:text-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
					target="_blank"
				>
					<span class="sr-only">episode's page on the publisher's site</span>
					<ExternalLink class="h-5 w-5" />
				</a>
			</div>

			<h4 class="mt-1.5 text-lg font-light leading-[1.33em]">{decodeHtml(episode.feedTitle)}</h4>
			<p class="mt-4 text-sm font-light">
				Published {new Intl.DateTimeFormat(undefined, {
					dateStyle: 'short',
				}).format(new Date(episode.pubDate))}
			</p>
			<p class="text-sm font-light">
				Recommended {new Intl.DateTimeFormat(undefined, {
					dateStyle: 'short',
				}).format(new Date(episode.dateRecommended))}
			</p>
		</div>
	</div>
	{#if errorMsg}
		<p class="mt-2 font-light text-red-600">{errorMsg}</p>
	{:else}
		<audio
			controls
			preload="metadata"
			bind:paused={isPaused}
			bind:readyState
			on:play={handlePlay}
			on:pause={handlePause}
			on:ended={handlePause}
			on:error={handleError}
			class="mt-2 w-full"
		>
			<source src={episode.enclosureUrl.replace('http://', 'https://')} type="audio/mpeg" />
		</audio>
	{/if}
</article>

<style lang="postcss">
	audio::-webkit-media-controls-panel {
		background-color: theme(colors.primary.100);
	}

	audio,
	audio::-webkit-media-controls-mute-button,
	audio::-webkit-media-controls-play-button,
	audio::-webkit-media-controls-timeline-container,
	audio::-webkit-media-controls-timeline,
	audio::-webkit-media-controls-volume-slider-container,
	audio::-webkit-media-controls-volume-slider {
		@apply focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
	}
	audio,
	audio::-webkit-media-controls-mute-button,
	audio::-webkit-media-controls-play-button {
		@apply focus-visible:rounded-full;
	}

	audio::-webkit-media-controls-timeline-container,
	audio::-webkit-media-controls-timeline,
	audio::-webkit-media-controls-volume-slider-container,
	audio::-webkit-media-controls-volume-slider {
		@apply focus-visible:rounded-sm;
	}
</style>
