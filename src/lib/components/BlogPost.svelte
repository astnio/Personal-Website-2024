<script lang="ts">
	import { onMount } from 'svelte';

	let feedData: any = null;
	let recentPosts: any[] = [];

	onMount(async () => {
		const response = await fetch('/api/rss');
		if (response.ok) {
			feedData = await response.json();
			recentPosts = feedData?.items.slice(0, 3);

			console.log(feedData);
			console.log(recentPosts);
		}
	});
</script>

{#if feedData}
	<div class="flex flex-col mx-auto max-w-screen-lg gap-8">
		<h2 class="h2">Recent Blog Posts</h2>
		{#each recentPosts as post}
			<article
				class="flex flex-col gap-4 bg-surface-200 dark:bg-surface-800 p-4 rounded-md bg-opacity-60 dark:bg-opacity-40"
			>
				<h3 class="h3">{post.title}</h3>
				<span class="badge variant-ringed w-fit py-2 px-4">{post.pubDate}</span>
				<p class=" line-clamp-2">{post.contentSnippet}</p>
				<a class="btn variant-ghost w-fit" href={post.link} target="_blank">Read more</a>
			</article>
		{/each}
	</div>
{:else}
	<p>Loading...</p>
{/if}
