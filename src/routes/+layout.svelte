<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.css';
	import 'boxicons/css/boxicons.min.css';
	import NavBar from '$lib/components/mainNavigation/NavBar.svelte';
	import FooterBar from '$lib/components/FooterBar.svelte';
	import NavigationDrawer from '$lib/components/mainNavigation/NavigationDrawer.svelte';
</script>

<NavigationDrawer />

<AppShell scrollbarGutter="auto">
	<div class="flex flex-col justify-between h-full">
		<NavBar />
		<slot />
		<FooterBar />
	</div>
</AppShell>
