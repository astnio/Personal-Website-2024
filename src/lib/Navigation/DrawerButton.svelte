<script lang="ts">
	import { initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		console.log('drawerOpen');
		drawerStore.open({});
	}
</script>

<div class="flex items-center md:hidden">
	<button class=" btn btn-sm mr-4" on:click={drawerOpen}>
		<span class="bx bx-menu text-2xl"></span>
	</button>
</div>
