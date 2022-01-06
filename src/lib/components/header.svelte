<script>
	import Nav from '$lib/components/nav.svelte';
	import '../../../static/global.css';
</script>

<header>
	<h1>Creative Dev Blog</h1>
	<Nav />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 1rem 2rem;
		border-bottom: 3px solid var(--purple);
	}
</style>
