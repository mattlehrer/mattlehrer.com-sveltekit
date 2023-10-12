<script lang="ts">
	import QuicksilverCre from '$lib/components/portfolio/QuicksilverCRE.svelte';
	import StrangeAttractors from '$lib/components/portfolio/StrangeAttractors.svelte';
	import WhomToFollow from '$lib/components/portfolio/WhomToFollow.svelte';
</script>

<section class="wrapper py-8 sm:py-16" aria-labelledby="projects-heading">
	<div class="full-bleed relative mb-8 sm:mb-16">
		<div class="absolute inset-0 flex items-center" aria-hidden="true">
			<div class="w-full border-t border-primary-800"></div>
		</div>
		<h2 id="projects-heading" class="relative flex justify-center">
			<span class="bg-primary-300 px-3 text-2xl font-semibold leading-6 text-gray-900 sm:text-4xl"
				>Projects</span
			>
		</h2>
	</div>

	<div class="projects full-bleed flex flex-col gap-8">
		<WhomToFollow />

		<QuicksilverCre />

		<StrangeAttractors />
	</div>
</section>
