<script lang="ts">
	import { Drawer } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import { drawerState } from '../../stores';

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

<Drawer position="right" width="w-64" on:backdrop={handleClose}>
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
