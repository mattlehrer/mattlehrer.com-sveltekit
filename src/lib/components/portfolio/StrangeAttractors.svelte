<script lang="ts">
	import { Compass, Github, Globe, Split } from 'lucide-svelte';
	import screenshot_desktop from './images/strange_attractors_desktop.png?format=avif;webp;png&as=lg';
	import screenshot_mobile from './images/strange_attractors_mobile.png?format=avif;webp;png&as=sm';
	import Img from '@zerodevx/svelte-img';
</script>

<article class="full-bleed bg-primary-200" aria-labelledby="strangeattractors">
	<div class="overflow-hidden py-24 sm:py-40">
		<div class="mx-auto max-w-7xl px-8 lg:px-16">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="project-column-spacing self-center">
					<div class="lg:max-w-lg">
						<div class="flex items-center gap-6">
							<h2 id="strangeattractors">Strange Attractors</h2>
							<a class="w-8" href="https://app.quicksilvercre.com">
								<Globe class="h-6 w-6 opacity-80" />
								<span class="sr-only">Site link</span>
							</a>
							<a class="w-8" href="https://github.com/mattlehrer/strange-attractors">
								<Github class="h-6 w-6 opacity-80" />
								<span class="sr-only">Github link</span></a
							>
						</div>
						<p class="mt-6 text-xl leading-8 text-primary-900">
							Interactive visualizations of strange attractors inspired by James Gleick's <i>
								Chaos</i
							>.
						</p>

						<dl class="mt-10 max-w-xl space-y-8 text-lg leading-7 text-primary-900 lg:max-w-none">
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Compass aria-hidden="true" />
									Why?
								</dt>
								<dd class="inline">
									This is just a fun project which gave me a chance to explore and think about chaos
									theory by playing around with the equations and learn three.js. I find the
									visualizations to be beautiful, mesmerizing and meditative.
								</dd>
							</div>
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Split aria-hidden="true" />Challenges.
								</dt>
								<dd class="inline">
									The camera angles and perspective involved in 3D rendering is not intuitive for
									me. Each system has a different scale so figuring out what the center should be
									for rotation and positioning of the camera involved a lot of trial and error.
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div class="project-image self-center">
					<Img
						src={screenshot_desktop}
						alt="Product screenshot desktop"
						class="hidden w-[36rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:block md:-ml-4 lg:-ml-0 lg:w-[38rem]"
					/>
					<Img
						src={screenshot_mobile}
						alt="Product screenshot mobile"
						class="w-[20rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:hidden md:-ml-4 lg:-ml-0"
					/>
				</div>
			</div>
		</div>
	</div>
</article>
