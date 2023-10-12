<script lang="ts">
	import QuicksilverCre from '$lib/components/portfolio/QuicksilverCRE.svelte';
	import StrangeAttractors from '$lib/components/portfolio/StrangeAttractors.svelte';
	import WhomToFollow from '$lib/components/portfolio/WhomToFollow.svelte';
</script>

<section class="wrapper py-8 sm:py-16" aria-labelledby="projects-heading">
	<div class="full-bleed relative">
		<div class="absolute inset-0 flex items-center" aria-hidden="true">
			<div class="w-full border-t border-primary-800"></div>
		</div>
		<h2 id="projects-heading" class="relative flex justify-center">
			<span
				class="bg-primary-300 px-8 text-3xl font-semibold leading-6 text-primary-850 sm:text-5xl"
				>Projects</span
			>
		</h2>
	</div>

	<div
		class="projects full-bleed flex flex-col gap-px bg-gradient-to-r from-tertiary-400 via-tertiary-700 to-tertiary-400"
	>
		<div class="bg-primary-300">
			<WhomToFollow />
		</div>

		<div class="bg-primary-300">
			<QuicksilverCre />
		</div>

		<div class="bg-primary-300">
			<StrangeAttractors />
		</div>
	</div>
</section>
