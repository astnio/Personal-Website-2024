<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Links from '../components/Links.svelte';
	import NavBar from '../components/NavBar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Home from '../pages/Home.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<svelte:fragment slot="trail">(actions)</svelte:fragment>
			<svelte:fragment slot="headline">Austin H.</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<Home />
	<svelte:fragment slot="footer">
		<div class="flex justify-between p-4">
			<p>&copy; Austin Hagel 2021 - {new Date().getFullYear()}</p>
			<LightSwitch />
		</div>
	</svelte:fragment>
</AppShell>
