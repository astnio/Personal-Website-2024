<script lang="ts">
	import { onMount } from 'svelte';
	import { AppShell, initializeStores, setModeCurrent } from '@skeletonlabs/skeleton';
	import NavLink from '$lib/Navigation/NavLink.svelte';
	import Hero from '../lib/HomeSections/Hero/Hero.svelte';
	import About from '../lib/HomeSections/About/About.svelte';
	import Projects from '../lib/HomeSections/Projects/Projects.svelte';
	import NavigationDrawer from '$lib/Navigation/NavigationDrawer.svelte';
	import FooterBar from '$lib/Navigation/FooterBar.svelte';
	import NavBar from '$lib/Navigation/NavBar.svelte';

	initializeStores();

	onMount(() => {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = prefersDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		setModeCurrent(theme == 'dark' ? false : true);
	});
</script>

<NavigationDrawer />

<AppShell slotSidebarRight="bg-surface-500/5" scrollbarGutter="auto">
	<NavBar />
	<div class="flex flex-col items-start justify-start gap-20 mt-8">
		<Hero />
		<About />
		<Projects>
			<div
				class="flex items-center justify-center mx-auto w-8 h-8 p-6 aspect-square mb-16 mt-32 rounded-full bg-surface-500 bg-opacity-20"
				title="Back to top"
			>
				<NavLink linkUrl="home" iconClass="bx bxs-chevrons-up text-4xl  opacity-60" />
			</div>
		</Projects>
	</div>
	<FooterBar />
</AppShell>
