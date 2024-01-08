<script lang="ts">
	import { onMount } from 'svelte';
	import { initializeStores, setModeCurrent } from '@skeletonlabs/skeleton';
	import Hero from '../lib/components/HomeSections/Hero/Hero.svelte';
	import About from '../lib/components/HomeSections/About/About.svelte';
	import Projects from '../lib/components/HomeSections/Projects/Projects.svelte';
	import NavLink from '$lib/components/Navigation/NavLink.svelte';
	import PlaceholderPost from '$lib/components/PlaceholderPost.svelte';
	import BlogPost from '$lib/components/BlogPost.svelte';

	initializeStores();

	onMount(() => {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = prefersDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		setModeCurrent(theme == 'dark' ? false : true);
	});

	export let data: any;

	const placeHolderData: any = data.props.placeHolderData;
</script>

<div class="flex flex-col items-start justify-start gap-20 mt-8">
	<Hero />
	<PlaceholderPost postData={placeHolderData} />
	<BlogPost />

	<div
		class="flex items-center justify-center mx-auto w-8 h-8 p-6 aspect-square mb-16 mt-32 rounded-full bg-surface-500 bg-opacity-20"
		title="Back to top"
	>
		<NavLink linkUrl="home" iconClass="bx bxs-chevrons-up text-4xl  opacity-60" />
	</div>
</div>
