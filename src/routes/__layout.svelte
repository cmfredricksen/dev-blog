<script>
	import '$lib/css/global.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Header />
<div class="wrapper">
	<slot />
</div>
<Footer />

<style>
	.wrapper {
		margin: 0 auto;
		width: 60vw;
	}
</style>
