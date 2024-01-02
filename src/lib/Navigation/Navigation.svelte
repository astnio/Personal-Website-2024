<script lang="ts">
	import LinkButton from '$lib/LinkButton.svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 h-full">
	<ul class="flex flex-col md:flex-row items-baseline h-full md:h-auto">
		<li class="w-full md:w-auto">
			<a href="/" on:click={drawerClose} class="flex items-center justify-center w-full">Home</a>
		</li>
		<li class="w-full md:w-auto">
			<a href="/about" on:click={drawerClose} class="flex items-center justify-center w-full"
				>About</a
			>
		</li>
		<li class="w-full md:w-auto">
			<a href="/projects" on:click={drawerClose} class="flex items-center justify-center w-full"
				>Projects</a
			>
		</li>
		<li class="w-full md:w-auto" style="margin-top: auto;">
			<LinkButton
				linkUrl="mailto:hello@msg.austinh.io"
				iconClass="bx bxs-envelope"
				newTab={false}
				buttonVariant="ghost"
				buttonClass="btn-sm"
			>
				<span class="semibold">Contact</span>
			</LinkButton>
		</li>
	</ul>
</nav>
