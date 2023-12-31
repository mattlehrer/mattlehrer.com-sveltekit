<script lang="ts">
	import PodcastEpisodeRecommendation from '$lib/components/podcasts/PodcastEpisodeRecommendation.svelte';

	import PodcastSubscription from '$lib/components/podcasts/PodcastSubscription.svelte';
	import { url } from '$lib/config';
	import { ArrowRight } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Matt Lehrer's recent podcast subscriptions and episode recommendations</title>
	<meta property="og:type" content="article" />
	<meta
		property="og:title"
		content="Matt Lehrer's recent podcast subscriptions and episode recommendations"
	/>
	<meta
		content="{url}api/og?title=Matt Lehrer's recent podcast subscriptions and episode recommendations"
		property="og:image"
	/>
	<meta
		content="Matt Lehrer's recent podcast subscriptions and episode recommendations"
		property="og:image:alt"
	/>
</svelte:head>

<article class="w-full overflow-hidden px-6 sm:px-16">
	<h1 class="mb-4 mt-8 text-4xl sm:text-5xl">Podcast Recommendations</h1>

	<section>
		<h2 id="episode-recs" class="mb-6 mt-16 text-2xl sm:text-4xl">
			Recent podcast episode recommendations
		</h2>
		<div class="mx-auto flex flex-wrap gap-4 sm:gap-6">
			{#each data.recentRecs as episode (episode.enclosureUrl)}
				<PodcastEpisodeRecommendation {episode} />
			{/each}
		</div>
		<div>
			<a
				href="/podcast-listening/episodes"
				class="tag-colors mt-4 flex max-w-max items-center rounded px-4 py-2 text-lg font-light hover:scale-110 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
				>See all episode recommendations <ArrowRight class="ml-2 inline-block" /></a
			>
		</div>
	</section>

	<section>
		<h2 id="recent-subs" class="mb-6 mt-16 text-2xl sm:text-4xl">Recent podcast subscriptions</h2>
		<div class="mx-auto flex flex-wrap gap-6">
			{#each data.recentSubs as podcast}
				<PodcastSubscription {podcast} />
			{/each}
		</div>
		<div>
			<a
				href="/podcast-listening/subscriptions"
				class="tag-colors mt-4 flex max-w-max items-center rounded px-4 py-2 text-lg font-light hover:scale-110 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
				>See all subscriptions <ArrowRight class="ml-2 inline-block" /></a
			>
		</div>
	</section>
</article>

<style lang="postcss">
	#episode-recs {
		view-transition-name: episode-recs;
	}

	#recent-subs {
		view-transition-name: recent-subs;
	}
</style>
