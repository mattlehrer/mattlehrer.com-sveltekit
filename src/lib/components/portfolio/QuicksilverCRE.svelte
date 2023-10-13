<script lang="ts">
	import { Compass, Globe, Split } from 'lucide-svelte';
	import screenshot_desktop from './quicksilvercre_screenshot.png';
	import screenshot_mobile from './quicksilvercre_screenshot_mobile.png';
</script>

<div class="full-bleed bg-primary-200">
	<div class="overflow-hidden py-24 sm:py-40">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="project-column-spacing self-center">
					<div class="lg:max-w-lg">
						<div class="flex items-center gap-6">
							<h3>Quicksilver CRE</h3>
							<a class="w-8" href="https://app.quicksilvercre.com">
								<Globe class="h-6 w-6 opacity-80" />
								<span class="sr-only">Site link</span>
							</a>
						</div>
						<p class="mt-6 text-xl leading-8 text-primary-900">
							A commercial real estate investment analysis tool, starting with a multi-tenant
							industrial buildings.
						</p>

						<dl class="mt-10 max-w-xl space-y-8 text-lg leading-7 text-primary-900 lg:max-w-none">
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Compass aria-hidden="true" />
									Why?
								</dt>
								<dd class="inline">
									This project combines my interests and work experience. The goal of the project is
									to provide a service that can be used by real estate developers to analyze
									potential deals as fast as they might be able to explain a deal to their analyst
									instead of the many hours it would take to create a model in Excel or Argus.
								</dd>
							</div>
							<div>
								<dt class="inline font-semibold text-primary-900">
									<Split aria-hidden="true" />Challenges.
								</dt>
								<dd class="inline">
									Input masking and form validation were new to me at the start of this project. I
									used the Class Validator technique that I learned from NestJS to keep track of
									state of the form inputs and validation. The math for the financial analysis works
									significantly differently than I was used to in Excel. Each cell in Excel is would
									reference the prior period. For this project, each calculation is independent
									relying on compounding to avoid loops and simplify the data structures.
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div class="project-image self-center">
					<img
						src={screenshot_desktop}
						alt="Product screenshot desktop"
						class="hidden w-[44rem] max-w-none shadow-xl ring-1 ring-gray-500/20 sm:block md:-ml-4 lg:-ml-0 lg:w-[48rem]"
						width="2084"
						height="1548"
					/>
					<img
						src={screenshot_mobile}
						alt="Product screenshot mobile"
						class="w-[24rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:hidden md:-ml-4 lg:-ml-0"
						width="780"
						height="1554"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
