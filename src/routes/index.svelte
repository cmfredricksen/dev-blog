<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json');

		const posts = await res.json();
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<h1>Blog</h1>

<div class="blog-list">
	{#each posts as post}
		<img class="medium-img" src={post.image} alt={post.title.rendered} />
		<h2>{@html post.title.rendered}</h2>
		<p>{@html post.excerpt.rendered}</p>

		<a href={`/posts/${post.id}`}>Read More</a>
		<div class="space" />
	{/each}
</div>

<style>
	.medium-img {
		width: 150px;
	}

	.space {
		width: 100vw;
		height: 3rem;
	}
</style>
