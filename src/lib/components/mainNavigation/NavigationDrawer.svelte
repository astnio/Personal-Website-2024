<script lang="ts">
	import { Drawer } from '@skeletonlabs/skeleton';
	import { drawerState } from '$lib/stores/drawerStore';
	import Navigation from './Navigation.svelte';

	import { initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';

	initializeStores();

	const drawerStore = getDrawerStore();

	$: if ($drawerState) {
		drawerStore.open({});
	} else {
		drawerStore.close();
	}

	function handleClose() {
		drawerState.set(false);
	}
</script>

<Drawer
	position="right"
	width="w-64"
	on:backdrop={handleClose}
	blur="backdrop-blur-sm"
	bgDrawer="bg-surface-200 dark:bg-surface-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur"
>
	<div class="flex flex-col h-full items-center w-full">
		<h2
			class="flex items-center justify-center p-4 cursor-default w-full uppercase tracking-wider text-primary-300/600 dark:bg-surface-700 bg-surface-200"
		>
			<span class="opacity-60 text-xl tracking-widest font-light">Navigation</span>
		</h2>
		<hr />
		<div class="flex flex-grow w-full">
			<Navigation />
		</div>
	</div>
</Drawer>
