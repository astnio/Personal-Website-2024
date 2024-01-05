<script lang="ts">
	import DrawerButton from './DrawerButton.svelte';
	import Logo from './Logo/Logo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div
	class="fixed w-full z-10 backdrop-blur-lg dark:bg-opacity-60 bg-opacity-80 dark:bg-surface-800 bg-surface-100"
>
	<div class="flex items-center justify-center w-full bg-surface-500/5">
		<div class="flex items-center justify-between mx-auto w-full max-w-screen-lg">
			<Logo />
			<div class="hidden md:flex">
				<Navigation />
			</div>
			<DrawerButton />
		</div>
	</div>
</div>
