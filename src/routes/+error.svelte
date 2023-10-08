<script>
	import { page } from '$app/stores';
</script>

<div class="error grid h-full place-content-center text-4xl">
	<h1>{$page.status}: <span class="font-bold">{$page.error?.message}</span></h1>
</div>
