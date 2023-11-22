<script lang="ts">
	import DividerBehindHeading from '$lib/components/DividerBehindHeading.svelte';
	import PodcastEpisodeRecommendation from '$lib/components/podcasts/PodcastEpisodeRecommendation.svelte';
	import type { EpisodeRecommendation } from '$lib/types';
	import { ArrowRight } from 'lucide-svelte';

	export let recommendations: EpisodeRecommendation[];
</script>

<section class="wrapper pb-8 sm:pb-16" aria-labelledby="podcast-recs-heading">
	<div class="full-bleed relative py-8 sm:py-16">
		<DividerBehindHeading />
		<h2 id="podcast-recs-heading" class="relative flex justify-center">
			<span class="xl:hidden">Latest podcast recs</span>
			<span class="hidden xl:inline">Latest podcast episode recommendations</span>
		</h2>
	</div>
	<div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
		{#each recommendations as episode}
			<PodcastEpisodeRecommendation {episode} />
		{/each}
	</div>
	<!-- div takes padding to align with the rest of the page  -->
	<div>
		<a
			href="/podcast-listening/episodes"
			class="tag-colors mt-8 flex max-w-max items-center rounded px-4 py-2 text-lg font-light hover:scale-110 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			>More episode recommendations <ArrowRight class="ml-2 inline-block" /></a
		>
	</div>
</section>
