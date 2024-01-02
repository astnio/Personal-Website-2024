<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import NavBar from '../lib/Navigation/NavBar.svelte';
	import { AppShell, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import Home from '../pages/Home.svelte';
	import { onMount } from 'svelte';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Logo from '$lib/Logo.svelte';

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
	<h2 class="p-4 cursor-default">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell slotSidebarRight="bg-surface-500/5">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<Logo />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden lg:flex">
					<Navigation />
				</div>
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span class="bx bx-menu text-2xl"></span>
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<Home />
	<svelte:fragment slot="footer">
		<div class="max-w-screen-lg w-full flex items-center justify-between mx-auto p-4">
			<p>&copy; Austin Hagel 2021 - {new Date().getFullYear()}</p>
			<LightSwitch />
		</div>
	</svelte:fragment>
</AppShell>
