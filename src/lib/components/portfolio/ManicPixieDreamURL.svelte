<script lang="ts">
	import { Compass, Globe, Split } from 'lucide-svelte';
	import screenshot_desktop from './images/manic_pixie_screenshot_desktop.png?format=avif;webp;png&as=lg';
	import screenshot_mobile from './images/manic_pixie_screenshot_mobile.png?format=avif;webp;png&as=sm';
	import Img from '@zerodevx/svelte-img';
</script>

<article class="full-bleed bg-primary-200" aria-labelledby="quicksilvercre">
	<div class="overflow-hidden py-24 sm:py-40">
		<div class="mx-auto max-w-7xl px-8 lg:px-16">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="project-column-spacing self-center">
					<div class="lg:max-w-lg">
						<div class="flex items-center gap-6">
							<h2 id="quicksilvercre">Manic Pixie Dream URL</h2>
							<a class="w-8" href="https://app.quicksilvercre.com">
								<Globe class="h-6 w-6 opacity-80" />
								<span class="sr-only">Site link</span>
							</a>
						</div>
						<p class="mt-6 text-xl leading-8 text-primary-900">
							A social network for parked domains.
						</p>

						<dl class="mt-10 max-w-xl space-y-8 text-lg leading-7 text-primary-900 lg:max-w-none">
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Compass aria-hidden="true" />
									Why?
								</dt>
								<dd class="inline">
									Yes, this is a ridiculous idea. This service is for people who fit the meme of
									buying domains with the intent of launching a new project and then renewing it
									forever without doing more. The idea is to create a community around that, collect
									ideas for what to do with a domain, potentially get motivation to work on it
									(maybe soon by collecting email addresses).
								</dd>
							</div>
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Split aria-hidden="true" />Challenges.
								</dt>
								<dd class="inline">
									Authentication across domains is more challenging in the current third-party
									cookie environment. Automatic TLS certificate creation is not something we have to
									deal with for most projects, but it's more complex here with one Caddy reverse
									proxy and one SvelteKit node app handling all domains on the network. This was my
									first project using Drizzle ORM and I will use it again.
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div class="project-image self-center">
					<Img
						src={screenshot_desktop}
						alt="Product screenshot desktop"
						class="hidden w-[44rem] max-w-none shadow-xl ring-1 ring-gray-500/20 sm:block md:-ml-4 lg:-ml-0 lg:w-[48rem]"
					/>
					<Img
						src={screenshot_mobile}
						alt="Product screenshot mobile"
						class="w-[24rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:hidden md:-ml-4 lg:-ml-0"
					/>
				</div>
			</div>
		</div>
	</div>
</article>
