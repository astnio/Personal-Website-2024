<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close({});
	}
</script>

<nav class="list-nav p-4">
	<ul class="flex flex-col lg:flex-row items-baseline">
		<li class="w-full">
			<a href="/" on:click={drawerClose} class="flex items-center justify-center w-full">Home</a>
		</li>
		<li class="w-full">
			<a href="/about" on:click={drawerClose} class="flex items-center justify-center w-full"
				>About</a
			>
		</li>
		<li class="w-full">
			<a href="/projects" on:click={drawerClose} class="flex items-center justify-center w-full"
				>Projects</a
			>
		</li>
		<li class="w-full">
			<a href="/contact" on:click={drawerClose} class="flex items-center justify-center w-full"
				>Contact</a
			>
		</li>
	</ul>
</nav>
