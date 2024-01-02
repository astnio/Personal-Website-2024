<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Links from '../components/Links.svelte';
	import NavBar from '../components/NavBar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Home from '../pages/Home.svelte';
	import LinkButton from '../components/LinkButton.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">Austin Hagel</svelte:fragment>
			<svelte:fragment slot="trail">
				<LinkButton
					linkUrl="mailto:hello@msg.austinh.io"
					iconClass="bx bxs-envelope"
					newTab={false}
					buttonVariant="filled"
					buttonClass="btn-sm"
				>
					<span class="font-bold relative bottom-[0.1rem]">Contact</span>
				</LinkButton>
			</svelte:fragment>
			<!-- <svelte:fragment slot="headline">Austin H.</svelte:fragment> -->
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
