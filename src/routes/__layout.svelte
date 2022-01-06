<script>
	import '../../static/global.css';
	import Header from '$lib/components/header.svelte';
</script>

<Header />
<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		margin: 0 auto;
		width: 60vw;
	}
</style>
