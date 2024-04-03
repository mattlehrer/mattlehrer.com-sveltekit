<script lang="ts">
	import QuicksilverCre from '$lib/components/portfolio/QuicksilverCRE.svelte';
	import StrangeAttractors from '$lib/components/portfolio/StrangeAttractors.svelte';
	import WhomToFollow from '$lib/components/portfolio/WhomToFollow.svelte';
	import SIWE_Chat from '$lib/components/portfolio/SIWE_Chat.svelte';
	import ManicPixieDreamUrl from './ManicPixieDreamURL.svelte';
</script>

<section class="wrapper py-8 sm:py-16" aria-labelledby="projects">
	<div class="full-bleed">
		<div class="mx-auto max-w-7xl px-8 lg:px-16">
			<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
				<div class="project-column-spacing self-center">
					<div class="lg:max-w-lg">
						<div class="flex items-center gap-6">
							<h1 id="projects" class="full-bleed mb-24 mt-8 w-full text-4xl sm:mb-40 sm:text-5xl">
								Projects & Portfolio
							</h1>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	</div>
	<div
		class="projects full-bleed flex flex-col gap-px bg-gradient-to-r from-tertiary-700 via-tertiary-500 to-tertiary-700"
	>
		<div class="main-bg-color">
			<ManicPixieDreamUrl />
		</div>

		<div class="main-bg-color">
			<WhomToFollow />
		</div>

		<div class="main-bg-color">
			<QuicksilverCre />
		</div>

		<div class="main-bg-color">
			<SIWE_Chat />
		</div>

		<div class="main-bg-color">
			<StrangeAttractors />
		</div>
	</div>
</section>
