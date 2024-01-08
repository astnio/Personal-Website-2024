<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.css';
	import 'boxicons/css/boxicons.min.css';
	import NavBar from '$lib/components/Navigation/NavBar.svelte';
	import FooterBar from '$lib/components/Navigation/FooterBar.svelte';
	import NavigationDrawer from '$lib/components/Navigation/NavigationDrawer.svelte';
</script>

<NavigationDrawer />

<AppShell slotSidebarRight="bg-surface-500/5" scrollbarGutter="auto">
	<NavBar />
	<slot />
	<FooterBar />
</AppShell>
