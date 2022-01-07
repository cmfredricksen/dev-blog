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

<div class="blog-list">
	{#each posts as post}
		<img class="medium-img" src={post.image} alt={post.title.rendered} />
		<h2>{@html post.title.rendered}</h2>
		<h4 class="author">by {post.author}</h4>
		<p>{@html post.excerpt.rendered}</p>

		<a href={`/posts/${post.id}`}>Read More</a>
		<div class="space" />
	{/each}
</div>

<style>
	.author {
		margin: 0.5rem 0 1rem;
	}
	.medium-img {
		width: 150px;
	}

	.space {
		width: 100%;
		height: 3rem;
		border-bottom: 2px solid var(--persian-indigo);
		margin-bottom: 3rem;
		display: flex;
	}

	.space::before {
		content: '♥';
	}

	a {
		font-size: small;
	}
</style>
