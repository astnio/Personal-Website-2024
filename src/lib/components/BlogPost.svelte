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

	function extractImageDetails(content: string) {
		const srcMatch = content.match(/<img[^>]+src="([^">]+)"/);
		const altMatch = content.match(/<img[^>]+alt="([^">]+)"/);

		const src = srcMatch ? srcMatch[1] : '';
		const alt = altMatch ? altMatch[1] : '';

		return { src, alt };
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		const options: Intl.DateTimeFormatOptions = {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		};
		return date.toLocaleDateString('en-US', options);
	}
</script>

{#if feedData}
	<div class="flex flex-col mx-auto max-w-screen-lg gap-8">
		<h2 class="h2">Recent Blog Posts</h2>
		{#each recentPosts as post}
			<article
				class="flex gap-4 bg-surface-200 dark:bg-surface-800 p-4 rounded-md bg-opacity-60 dark:bg-opacity-40"
			>
				<div style="flex: 0 0 auto;" class="flex max-w-40">
					<img
						src={extractImageDetails(post.content).src}
						alt={extractImageDetails(post.content).alt}
						class="w-full h-auto rounded-md object-cover aspect-square"
					/>
				</div>

				<div class="flex flex-col gap-2 justify-between">
					<div class="flex gap-4 flex-wrap">
						<h3 class="h3">{post.title}</h3>
						<span class="badge variant-ringed w-fit py-2 px-4">{formatDate(post.pubDate)}</span>
					</div>

					<p class=" line-clamp-2">{post.contentSnippet}</p>
					<a class="btn variant-ghost w-fit mt-4" href={post.link} target="_blank">Read more</a>
				</div>
			</article>
		{/each}
	</div>
{:else}
	<p>Loading...</p>
{/if}
