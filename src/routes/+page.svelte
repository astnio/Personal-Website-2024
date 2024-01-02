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
		<div class="w-full p-4 dark:bg-surface-800 bg-surface-100">
			<div class="max-w-screen-lg w-full flex items-center justify-between mx-auto">
				<span>Austin Hagel</span>
				<span>
					<LinkButton
						linkUrl="mailto:hello@msg.austinh.io"
						iconClass="bx bxs-envelope"
						newTab={false}
						buttonVariant="filled"
						buttonClass="btn-sm"
					>
						<span class="font-bold relative bottom-[0.1rem]">Contact</span>
					</LinkButton>
				</span>
			</div>
		</div>
	</svelte:fragment>
	<Home />
	<svelte:fragment slot="footer">
		<div class="max-w-screen-lg w-full flex items-center justify-between mx-auto p-4">
			<p>&copy; Austin Hagel 2021 - {new Date().getFullYear()}</p>
			<LightSwitch />
		</div>
	</svelte:fragment>
</AppShell>
