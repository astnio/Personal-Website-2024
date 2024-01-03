<script lang="ts">
	import { initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';

	import Logo from './Logo/Logo.svelte';
	import Navigation from './Navigation.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<div>
	<div class="flex items-center justify-center w-full bg-surface-500/5">
		<div class="flex items-center justify-between mx-auto w-full max-w-screen-lg">
			<Logo />
			<div class="hidden md:flex">
				<Navigation />
			</div>
			<div class="flex items-center md:hidden">
				<button class=" btn btn-sm mr-4" on:click={drawerOpen}>
					<span class="bx bx-menu text-2xl"></span>
				</button>
			</div>
		</div>
	</div>
</div>
