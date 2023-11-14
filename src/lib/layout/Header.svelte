<script lang="ts">
	import { page } from '$app/stores';

	let isChecked = false;
</script>

<header class="full-bleed px-8 text-primary-800 sm:px-16">
	<nav class="flex items-center justify-between py-8">
		{#if $page.route.id !== '/'}
			<a
				class="pt-1 text-inherit no-underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-800"
				href="/"
			>
				<span class="fancy-serif-bold text-4xl font-black md:text-5xl">ML</span>
			</a>
			<div class="flex items-center justify-between">
				<input
					id="menu-toggle"
					aria-label={isChecked ? 'Close menu' : 'Open menu'}
					title={isChecked ? 'Close menu' : 'Open menu'}
					class="absolute cursor-pointer opacity-0"
					type="checkbox"
					bind:checked={isChecked}
				/>
				<label
					class="menu-button-container z-10 flex h-full w-12 cursor-pointer flex-col items-center justify-center md:hidden"
					for="menu-toggle"
				>
					<div class="menu-button"></div>
				</label>
				<ul
					class="menu absolute left-0 top-0 z-20 mt-24 flex w-full list-none flex-col items-center justify-center text-sm md:relative md:mt-0 md:w-auto md:flex-row md:gap-4 md:text-base"
				>
					<li>
						<a on:click={() => (isChecked = false)} href="/about">About</a>
					</li>
					<li>
						<a on:click={() => (isChecked = false)} href="/blog">Blog</a>
					</li>
					<li>
						<a on:click={() => (isChecked = false)} href="/reading/books">Book reviews</a>
					</li>
					<li>
						<a on:click={() => (isChecked = false)} href="/podcast-listening"
							>Podcast recommendations</a
						>
					</li>
				</ul>
			</div>
		{/if}
	</nav>
</header>

<style lang="postcss">
	li {
		@apply m-0 h-0 md:h-auto;
	}

	li > a {
		@apply px-2 text-lg hover:scale-110 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800 md:text-base lg:text-lg;
	}

	.menu-button,
	.menu-button::before,
	.menu-button::after {
		/* display: block; */
		background-color: theme(colors.primary.700);
		position: absolute;
		height: 4px;
		width: 40px;
		transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
		border-radius: 2px;
	}

	.menu-button::before {
		content: '';
		margin-top: -10px;
	}

	.menu-button::after {
		content: '';
		margin-top: 10px;
	}

	#menu-toggle:checked + .menu-button-container .menu-button::before {
		margin-top: 0px;
		transform: rotate(405deg);
	}

	#menu-toggle:checked + .menu-button-container .menu-button {
		background: rgba(255, 255, 255, 0);
	}

	#menu-toggle:checked + .menu-button-container .menu-button::after {
		margin-top: 0px;
		transform: rotate(-405deg);
	}

	@media (max-width: theme(screens.md)) {
		#menu-toggle ~ .menu li {
			padding: 0;
			border: 0;
			transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
			visibility: hidden;
		}

		#menu-toggle:checked ~ .menu li {
			visibility: visible;
			border: 1px solid theme(colors.primary.800);
			height: auto;
			padding: 1em;
			transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
		}
		.menu > li {
			display: flex;
			justify-content: center;
			width: 100%;
			color: theme(colors.primary.100);
			background-color: theme(colors.primary.700);
		}

		.menu > li:hover {
			background-color: theme(colors.primary.800);
		}

		#menu-toggle:focus-visible ~ .menu-button-container {
			@apply h-10 w-12 rounded outline outline-2 outline-offset-2 outline-primary-700;
		}
	}
</style>
