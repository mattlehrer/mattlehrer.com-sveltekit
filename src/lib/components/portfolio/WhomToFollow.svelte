<script lang="ts">
	import { Compass, Github, Globe, Split } from 'lucide-svelte';
	import wtf_screenshot from './images/whom_to_follow_interfluidity.png?format=avif;webp;png&as=lg';
	import mike_masnick_avatar from './images/mike_masnick.png';
	import Img from '@zerodevx/svelte-img';
</script>

<article class="full-bleed" aria-labelledby="whomtofollow">
	<div class="overflow-hidden py-24 sm:py-40">
		<div class="mx-auto max-w-7xl px-8 lg:px-16">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="project-column-spacing self-center">
					<div class="lg:max-w-lg">
						<div class="flex items-center gap-6">
							<h2 id="whomtofollow">Whom To Follow</h2>
							<a class="w-8" href="https://whomtofollow.com">
								<Globe class="h-6 w-6 opacity-80" />
								<span class="sr-only">Site link</span>
							</a>
							<a class="w-8" href="https://github.com/mattlehrer/whomtofollow">
								<Github class="h-6 w-6 opacity-80" />
								<span class="sr-only">Github link</span></a
							>
						</div>
						<p class="mt-6 text-xl leading-8 text-primary-900">
							A privacy-focused social discovery tool for ActivityPub social networks like Mastodon.
						</p>

						<dl class="mt-10 max-w-xl space-y-8 text-lg leading-7 text-primary-900 lg:max-w-none">
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Compass aria-hidden="true" />
									Why?
								</dt>
								<dd class="inline">
									An OSS project with a tiny team and goals other than profits and user stickiness,
									Mastodon has not prioritized discovery. Federation means each server has limited
									information, so discovery is more difficult. The goal of this project is to help
									users improve their experience by surfacing great accounts and to grow the
									Fediverse overall.
								</dd>
							</div>
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Split aria-hidden="true" />Challenges.
								</dt>
								<dd class="inline">
									The site is resource intensive. Experiments with virtual lists did not preserve
									the expected scroll behavior for the page overall. Also, the default search sorts
									by percentage of account followers followed, however federated servers have stale
									follower count data. When a user hovers a particular account, accurate data is
									requested and is shown on click but the list is not reordered.
								</dd>
							</div>
						</dl>
						<figure
							class="mt-12 max-w-xl border-l-2 border-secondary-700 bg-secondary-200 py-3 pl-8 pr-4 text-secondary-800 lg:max-w-none"
						>
							<blockquote class="text-lg leading-7">
								<p>
									“holy crap. like everyone that one is telling me to follow are people i want to
									follow but didn't realize was here.”
								</p>
							</blockquote>
							<figcaption class="mt-6 max-w-max leading-6">
								<a
									class="-ml-1 flex items-center gap-x-3 rounded pl-1 pr-2 underline transition-all duration-200 ease-in-out hover:scale-110 hover:text-secondary-950 focus-visible:rounded-lg focus-visible:bg-secondary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-secondary-700"
									target="_blank"
									rel="noopener"
									href="https://mastodon.social/@mmasnick/109805060108408385"
								>
									<img
										src={mike_masnick_avatar}
										alt="Mike Masnick avatar"
										class="h-8 w-8 flex-none rounded-full"
									/>
									<div class="font-semibold text-secondary-900">Mike Masnick</div>
								</a>
							</figcaption>
						</figure>
					</div>
				</div>
				<div class="project-image self-center">
					<Img
						src={wtf_screenshot}
						alt="Product screenshot"
						loading="eager"
						class="w-[48rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
					/>
				</div>
			</div>
		</div>
	</div>
</article>
