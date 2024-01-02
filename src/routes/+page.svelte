<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Links from '../components/Links.svelte';
	import NavBar from '../components/NavBar.svelte';
</script>

<NavBar />
<div class="flex flex-col items-center justify-center w-full h-[100svh]">
	<div class="flex items-center justify-center mt-6 mr-6 ml-auto">
		<LightSwitch />
	</div>
	<div class="flex flex-col my-auto">
		<h1 class=" text-4xl">Hello, I am Austin Hagel</h1>
		<div class="flex gap-8 mt-1">
			<p>Web Developer | Digital Designer</p>
			<a href="mailto:hello@msg.austinh.io">Contact Me</a>
		</div>
		<Links />
		<div class="mt-4"></div>
	</div>
</div>
