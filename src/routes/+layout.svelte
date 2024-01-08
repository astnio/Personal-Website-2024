<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.css';
	import 'boxicons/css/boxicons.min.css';
	import NavBar from '$lib/components/Navigation/NavBar.svelte';
	import FooterBar from '$lib/components/Navigation/FooterBar.svelte';
	import NavigationDrawer from '$lib/components/Navigation/NavigationDrawer.svelte';
</script>

<NavigationDrawer />

<AppShell scrollbarGutter="auto">
	<NavBar />
	<div class="min-h-[100svh]">
		<slot />
		<FooterBar />
	</div>
</AppShell>
