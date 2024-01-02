<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import NavBar from '../lib/Navigation/NavBar.svelte';
	import { AppShell, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import Home from '../pages/Home.svelte';
	import { onMount } from 'svelte';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Logo from '$lib/Logo/Logo.svelte';
	import About from '../pages/About.svelte';
	import Projects from '../pages/Projects/Projects.svelte';

	onMount(() => {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = prefersDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
	});

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Drawer position="right" width="w-64">
	<div class="flex flex-col h-full">
		<h2
			class="flex items-center justify-center p-4 cursor-default w-full uppercase tracking-wider text-primary-300/600 dark:bg-surface-700 bg-surface-200"
		>
			Navigation
		</h2>
		<hr />
		<div class="flex flex-grow">
			<Navigation />
		</div>
	</div>
</Drawer>

<AppShell slotSidebarRight="bg-surface-500/5">
	<svelte:fragment slot="header">
		<div class="flex items-center justify-center w-full bg-surface-500/5">
			<div class="flex items-center justify-between mx-auto w-full max-w-screen-lg">
				<Logo />
				<div class="hidden md:flex">
					<Navigation />
				</div>
				<div class="flex items-center md:hidden">
					<button class=" btn btn-sm mr-4" on:click={drawerOpen}>
						<span class="bx bx-menu text-2xl"></span>
					</button>
				</div>
			</div>
		</div>
	</svelte:fragment>
	<Home />
	<About />
	<Projects />
	<svelte:fragment slot="footer">
		<div class="max-w-screen-lg w-full flex items-center justify-between mx-auto p-4">
			<p>&copy; 2021-{new Date().getFullYear()} Austin Hagel</p>
			<LightSwitch />
		</div>
	</svelte:fragment>
</AppShell>
