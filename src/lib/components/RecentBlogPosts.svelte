<script lang="ts">
	import { onMount } from 'svelte';

	let feedData: any = null;
	let recentPosts: any[] = [];
	const placeHolderSections = 3;

	onMount(async () => {
		const response = await fetch('/api/rss');
		if (response.ok) {
			feedData = await response.json();
			recentPosts = feedData?.items.slice(0, 3);
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

<div class="flex flex-col mx-auto max-w-screen-lg gap-8 min-w-full">
	<h2 class="h2">Recent Blog Posts</h2>
	{#if feedData}
		{#each recentPosts as post}
			<article
				class="flex flex-col md:flex-row flex-wrap md:flex-nowrap bg-surface-200 dark:bg-surface-800 rounded-md bg-opacity-60 dark:bg-opacity-40 overflow-hidden"
			>
				<div class="flex grow aspect-video">
					<img
						src={extractImageDetails(post.content).src}
						alt={extractImageDetails(post.content).alt}
						class="object-cover h-full w-auto dark:opacity-60 opacity-80"
					/>
				</div>

				<div class="flex flex-auto flex-col gap-2 justify-between p-4">
					<div class="flex flex-auto gap-4 flex-wrap items-center justify-between mb-4">
						<h3 class="h3">{post.title}</h3>
						<span class="badge variant-soft w-fit opacity-80">{formatDate(post.pubDate)}</span>
					</div>
					<p class="sm:line-clamp-2 line-clamp-4">{post.contentSnippet}</p>
					<a class="btn variant-ghost w-fit mt-4" href={post.link} target="_blank">Read more</a>
				</div>
			</article>
		{/each}
	{:else}
		{#each Array(placeHolderSections) as _, i}
			<section class="card grid-cols-2 p-4 lg:min-w-[1024px] md:min-w-[768px] sm:min-w-[640px]">
				<div class="placeholder circle w-32 h-32 col-span-2 animate-pulse" />
				<div class="grid p-4 space-y-4">
					<div class="placeholder animate-pulse" />
					<div class="grid grid-cols-3 gap-8">
						<div class="placeholder animate-pulse" />
						<div class="placeholder animate-pulse" />
						<div class="placeholder animate-pulse" />
					</div>
					<div class="grid grid-cols-4 gap-4">
						<div class="placeholder animate-pulse" />
						<div class="placeholder animate-pulse" />
						<div class="placeholder animate-pulse" />
						<div class="placeholder animate-pulse" />
					</div>
				</div>
			</section>
		{/each}
	{/if}
</div>
