<script lang="ts">
	import { audioPlaying } from '$lib/stores';
	import type { EpisodeRecommendation } from '$lib/types';
	import { decodeHtml } from '$lib/utils';

	export let episode: EpisodeRecommendation;
	export let isPaused = true;

	$: if ($audioPlaying) {
		isPaused = $audioPlaying !== episode.enclosureUrl;
	}

	function handlePlay() {
		$audioPlaying = episode.enclosureUrl;
		isPaused = false;
	}

	function handlePause() {
		$audioPlaying = null;
		isPaused = true;
	}
</script>

<article
	class="flex w-full flex-col justify-between gap-2 rounded-sm bg-primary-200 p-4 shadow-inner sm:w-[40ch] sm:p-6"
>
	<div class="flex gap-4 sm:gap-6">
		<img
			src="https://public.overcast-cdn.com/art/{episode.overcastFeedId}?v1"
			alt={`Cover art for ${episode.feedTitle}`}
			loading="lazy"
			class="h-20 w-20 sm:h-28 sm:w-28"
		/>
		<div class="flex w-full flex-col">
			<h3 class="text-lg font-bold leading-[1.33em]">{decodeHtml(episode.title)}</h3>
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
	<audio
		controls
		preload="metadata"
		bind:paused={isPaused}
		on:play={handlePlay}
		on:pause={handlePause}
		on:ended={handlePause}
		class="mt-2 w-full"
	>
		<source src={episode.enclosureUrl} type="audio/mpeg" />
	</audio>
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
