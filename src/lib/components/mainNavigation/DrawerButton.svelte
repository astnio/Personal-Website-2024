<script lang="ts">
	import { drawerState } from '$lib/stores/drawerStore';

	function drawerOpen(): void {
		drawerState.update((state: boolean) => !state);
	}
</script>

<div class="flex items-center md:hidden">
	<button class=" btn btn-sm mr-4" on:click={drawerOpen}>
		<span class="bx bx-menu text-2xl"></span>
	</button>
</div>
