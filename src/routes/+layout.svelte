<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.css';
	import 'boxicons/css/boxicons.min.css';
	import NavBar from '$lib/components/mainNavigation/NavBar.svelte';
	import FooterBar from '$lib/components/FooterBar.svelte';
	import NavigationDrawer from '$lib/components/mainNavigation/NavigationDrawer.svelte';
	import { drawerState } from '$lib/stores/drawerStore';
	import { onMount } from 'svelte';

	let startX = 0;
	const threshold = 100;
	let isDrawerOpening = false;

	function handleTouchStart(e: any) {
		if (window.innerWidth > 768) return;

		startX = e.touches[0].clientX;
		isDrawerOpening = false;
	}

	function handleTouchMove(e: any) {
		if (window.innerWidth > 768) return;

		if (isDrawerOpening) return;

		const currentX = e.touches[0].clientX;
		const distance = currentX - startX;

		if (Math.abs(distance) > threshold) {
			if (distance < 0) {
				drawerOpen();
				isDrawerOpening = true;
			} else {
				drawerClose();
				console.log('drawerClose');
			}
		}
	}

	function drawerOpen(): void {
		drawerState.update((state: boolean) => !state);
	}

	function drawerClose() {
		drawerState.set(false);
	}

	onMount(() => {
		const drawerTouchControllers = document.querySelectorAll('.drawerTouchController');

		if (!drawerTouchControllers) return;
		drawerTouchControllers.forEach((element) => {
			element.addEventListener('touchstart', handleTouchStart);
			element.addEventListener('touchmove', handleTouchMove);
		});

		return () => {
			drawerTouchControllers.forEach((element) => {
				element.removeEventListener('touchstart', handleTouchStart);
				element.removeEventListener('touchmove', handleTouchMove);
			});
		};
	});
</script>

<div class="drawerTouchController">
	<NavigationDrawer />
</div>

<AppShell scrollbarGutter="auto">
	<div class="flex flex-col justify-between h-full drawerTouchController">
		<NavBar />
		<slot />
		<FooterBar />
	</div>
</AppShell>
