import { BASE_URL, POSTS_API_URL } from '$lib/variables';

export const get = async (request) => {
	const id = request.params.id;
	const res = await fetch(`${BASE_URL}${POSTS_API_URL}${id}?_embed`);

	const post = await res.json();
	post.image = post._embedded['wp:featuredmedia'][0].source_url;
	post.author = post._embedded['author'][0].name;

	return {
		status: 200,
		body: post
	};
};
