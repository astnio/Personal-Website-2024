<script lang="ts">
	import { onMount } from 'svelte';

	let feedData: any = null;

	onMount(async () => {
		const response = await fetch('/api/rss');
		if (response.ok) {
			feedData = await response.json();
			console.log(feedData);
		}
	});
</script>

{#if feedData}
	<div class="flex flex-col mx-auto max-w-screen-lg gap-4">
		<h1 class="h1">{feedData.title}</h1>
		{#each feedData.items as item}
			<article>
				<h2 class="h2">{item.title}</h2>
				<p>{item.contentSnippet}</p>
				<a href={item.link} target="_blank">Read more</a>
			</article>
		{/each}
	</div>
{:else}
	<p>Loading...</p>
{/if}
