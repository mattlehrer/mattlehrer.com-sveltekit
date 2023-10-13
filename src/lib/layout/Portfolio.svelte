<script lang="ts">
	import DividerBehindHeading from '$lib/components/DividerBehindHeading.svelte';

	import QuicksilverCre from '$lib/components/portfolio/QuicksilverCRE.svelte';
	import StrangeAttractors from '$lib/components/portfolio/StrangeAttractors.svelte';
	import WhomToFollow from '$lib/components/portfolio/WhomToFollow.svelte';
</script>

<section class="wrapper py-8 sm:py-16" aria-labelledby="projects-heading">
	<div class="full-bleed relative">
		<DividerBehindHeading />
		<h2 id="projects-heading" class="relative flex justify-center">
			<span>Projects</span>
		</h2>
	</div>

	<div
		class="projects full-bleed flex flex-col gap-px bg-gradient-to-r from-tertiary-700 via-tertiary-500 to-tertiary-700"
	>
		<div class="main-bg-color">
			<WhomToFollow />
		</div>

		<div class="main-bg-color">
			<QuicksilverCre />
		</div>

		<div class="main-bg-color">
			<StrangeAttractors />
		</div>
	</div>
</section>
