<script lang="ts">
	import { Compass, Github, Globe, Split } from 'lucide-svelte';
	import wtf_screenshot from './whom_to_follow_interfluidity.png';
	import mike_masnick_avatar from './mike_masnick.png';
</script>

<div class="full-bleed">
	<div class="overflow-hidden py-12 sm:py-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="project-column-spacing lg:pt-4">
					<div class="lg:max-w-lg">
						<div class="flex items-center gap-8">
							<h3 class=" text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
								Whom To Follow
							</h3>
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
							<div class="relative pl-9">
								<dt class="inline font-semibold text-primary-900">
									<Compass
										aria-hidden="true"
										class="absolute left-1 top-1 h-5 w-5 text-tertiary-700"
									/>
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
							<div class="relative pl-9">
								<dt class="inline font-semibold text-primary-900">
									<Split
										aria-hidden="true"
										class="absolute left-1 top-1 h-5 w-5 text-tertiary-700"
									/>Challenges.
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
							class="mt-12 max-w-xl border-l-2 border-primary-700 bg-primary-200 py-3 pl-8 pr-4 text-primary-800 lg:max-w-none"
						>
							<blockquote class="text-lg leading-7">
								<p>
									“holy crap. like everyone that one is telling me to follow are people i want to
									follow but didn't realize was here.”
								</p>
							</blockquote>
							<figcaption class="mt-6 leading-6">
								<a
									class="flex items-center gap-x-4"
									href="https://mastodon.social/@mmasnick/109805060108408385"
								>
									<img
										src={mike_masnick_avatar}
										alt="Mike Masnick avatar"
										class="h-8 w-8 flex-none rounded-full"
									/>
									<div class="font-semibold text-primary-900">Mike Masnick</div>
								</a>
							</figcaption>
						</figure>
					</div>
				</div>
				<div class="project-image">
					<img
						src={wtf_screenshot}
						alt="Product screenshot"
						class="w-[48rem] max-w-none self-center shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
						width="2482"
						height="1980"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
