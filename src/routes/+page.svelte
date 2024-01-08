<script lang="ts">
	import { onMount } from 'svelte';
	import { initializeStores, setModeCurrent } from '@skeletonlabs/skeleton';
	import Hero from '$lib/components/heroPage/Hero.svelte';

	initializeStores();

	onMount(() => {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = prefersDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		setModeCurrent(theme == 'dark' ? false : true);
	});
</script>

<div class="flex h-full items-center">
	<Hero />
</div>
