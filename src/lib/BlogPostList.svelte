<script lang="ts">
	import { onMount } from 'svelte';
	import BlogPost from './BlogPost.svelte';

	let posts: any[] = [];

	onMount(async () => {
		const response = await fetch('src/routes/rss.ts');
		if (response.ok) {
			const data = await response.json();
			posts = data.posts;
		}
	});
</script>

{#each posts as post}
	<BlogPost {post} />
{/each}
