<script lang="ts">
	export let title = '';

	const fontSize = Math.max(16 * 2, Math.min(16 * 8, 300 / Math.log(title.length)));
</script>

<div class="wrap">
	<div class="page" style="font-size: {fontSize}px">{title}</div>

	<div class="site">mattlehrer.com</div>
</div>

<style>
	.wrap {
		height: 630;
		width: 1200;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;

		background-image: linear-gradient(to bottom right, #164c5f, #21708d);

		font-family: 'Plus Jakarta Sans';
		color: #f1c989;
	}

	.page {
		flex-grow: 1;
		margin: 1rem auto;

		display: flex;
		flex-direction: column;
		justify-content: space-around;

		max-width: 85%;
		text-wrap: balance;
		text-wrap: pretty;
		line-height: 1.1;
	}

	.site {
		margin: 0 5rem 5rem;
		align-self: flex-end;
		font-size: 3.75rem;
		line-height: 1;
		color: #e7a339;
	}
</style>
