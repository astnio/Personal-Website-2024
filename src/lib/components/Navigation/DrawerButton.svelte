<script lang="ts">
	import { drawerState } from '$lib/stores/drawerStore';

	// import { initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';
	// import { drawerState } from '$app/stores';

	// initializeStores();

	// const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		// drawerStore.open({});
		drawerState.update((state: boolean) => !state);
		console.log(drawerState);
	}
</script>

<div class="flex items-center md:hidden">
	<button class=" btn btn-sm mr-4" on:click={drawerOpen}>
		<span class="bx bx-menu text-2xl"></span>
	</button>
</div>
