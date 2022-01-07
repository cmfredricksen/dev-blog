<script context="module">
	export const load = async ({ params, fetch }) => {
		const id = params.id;
		const res = await fetch(`/api/posts/${id}.json`);

		const post = await res.json();

		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	export let post;
</script>

<div class="post-container">
	<h2>{@html post.title.rendered}</h2>
	<p>Written by {@html post.author}</p>
	<p>Published on {@html post.date}</p>

	{#if post.image}
		<img src={post.image} alt={post.title.rendered} />
	{/if}

	<p>{@html post.content.rendered}</p>
</div>

<style>
	.post-container {
		display: flex;
		flex-direction: column;
		padding: 2rem 0;
		margin: 1rem auto;
	}

	h2 {
		text-align: center;
		margin: 0 0 1rem;
	}
	img {
		width: 300px;
		padding: 1rem 0;
		margin: 0 auto;
	}
</style>
