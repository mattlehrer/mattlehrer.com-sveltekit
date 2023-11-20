<script lang="ts">
	import { Compass, Github, Globe, Split } from 'lucide-svelte';
	import screenshot_desktop from './images/siwe_screenshot_desktop.png?format=avif;webp;png&as=lg';
	import screenshot_mobile from './images/siwe_screenshot_mobile.png?format=avif;webp;png&as=sm';
	import Img from '@zerodevx/svelte-img';
</script>

<article class="full-bleed" aria-labelledby="siwechat">
	<div class="overflow-hidden py-24 sm:py-40">
		<div class="mx-auto max-w-7xl px-8 lg:px-16">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="project-column-spacing self-center">
					<div class="lg:max-w-lg">
						<div class="flex items-center gap-6">
							<h2 id="siwechat">SIWE Chat</h2>
							<a class="w-8" href="https://mau-siwe-demo.vercel.app/">
								<Globe class="h-6 w-6 opacity-80" />
								<span class="sr-only">Site link</span>
							</a>
							<a class="w-8" href="https://github.com/mattlehrer/siwe-demo">
								<Github class="h-6 w-6 opacity-80" />
								<span class="sr-only">Github link</span></a
							>
						</div>
						<p class="mt-6 text-xl leading-8 text-primary-900">
							A master's class project to demonstrate Sign-in With Ethereum, the site uses custom
							Firebase auth tokens based on Ethereum wallet IDs to provide pseudonymous real-time
							chat.
						</p>

						<dl class="mt-10 max-w-xl space-y-8 text-lg leading-7 text-primary-900 lg:max-w-none">
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Compass aria-hidden="true" />
									Why?
								</dt>
								<dd class="inline">
									For an independent study course, I researched blockchain technology and created a
									series of seminars to discuss why the technology is potentially interesting. One
									of the talking points was to compare the <a href="https://www.bankid.com/en/"
										>Swedish BankID system</a
									> with Sign-in with Ethereum. I created this site so that students could learn about
									the user experience.
								</dd>
							</div>
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Split aria-hidden="true" />Challenges.
								</dt>
								<dd class="inline">
									Setting up sign-in with Ethereum is fairly straigtforward. The challenges in this
									project were figuring out what backend and database would work best for real-time
									data and carrying the Ethereum sign-in across sessions and devices. Firebase's
									custom auth tokens work great for the auth challenge. I found the document store
									much less intuitive than relational databases, but the real-time features work
									very well.
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
