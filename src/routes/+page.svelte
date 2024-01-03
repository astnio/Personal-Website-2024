<script lang="ts">
	import { onMount } from 'svelte';
	import {
		AppShell,
		initializeStores,
		Drawer,
		getDrawerStore,
		LightSwitch,
		setModeCurrent
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import NavLink from '$lib/Navigation/NavLink.svelte';
	import Logo from '$lib/Logo/Logo.svelte';
	import Home from '../pages/Home.svelte';
	import About from '../pages/About/About.svelte';
	import Projects from '../pages/Projects/Projects.svelte';
	import NavigationDrawer from '$lib/Navigation/NavigationDrawer.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();

	onMount(() => {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = prefersDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		setModeCurrent(theme == 'dark' ? false : true);
	});

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<NavigationDrawer />

<AppShell slotSidebarRight="bg-surface-500/5" scrollbarGutter="auto">
	<div>
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
	</div>
	<div class="flex flex-col items-start justify-start gap-20">
		<Home />
		<About />
		<Projects>
			<div
				class="flex items-center justify-center mx-auto w-8 h-8 p-6 aspect-square my-16 rounded-full bg-surface-500 bg-opacity-20"
			>
				<NavLink linkUrl="home" iconClass="bx bxs-chevrons-up text-4xl  opacity-60" />
			</div>
		</Projects>
	</div>

	<footer>
		<div class="max-w-screen-lg w-full flex items-center justify-between mx-auto p-4">
			<p>&copy; 2021-{new Date().getFullYear()} Austin Hagel</p>
			<LightSwitch />
		</div>
	</footer>
</AppShell>
