<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import NavBar from '../components/NavBar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Home from '../pages/Home.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = prefersDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
	});
</script>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar />
	</svelte:fragment>
	<Home />
	<svelte:fragment slot="footer">
		<div class="max-w-screen-lg w-full flex items-center justify-between mx-auto p-4">
			<p>&copy; Austin Hagel 2021 - {new Date().getFullYear()}</p>
			<LightSwitch />
		</div>
	</svelte:fragment>
</AppShell>
