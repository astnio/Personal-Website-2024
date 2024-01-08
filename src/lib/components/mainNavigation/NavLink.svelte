<script lang="ts">
	import { drawerState } from '$lib/stores/drawerStore';

	export let linkUrl: string;
	export let title: string = '';
	export let iconClass: string = '';
	const isInternalLink: boolean = linkUrl.split('').some((linkChar) => linkChar === '#');

	function handleClose() {
		drawerState.set(false);
	}

	function scrollToSection(event: MouseEvent, sectionId: string): void {
		event.preventDefault();
		const section = document.getElementById(sectionId);
		if (!section) {
			console.warn(`Section with id ${sectionId} not found`);
		} else section.scrollIntoView({ behavior: 'smooth' });
	}

	function handleClick(event: MouseEvent): void {
		if (isInternalLink) {
			event.preventDefault();
			scrollToSection(event, linkUrl);
		}
		handleClose();
	}
</script>

<a href={`${linkUrl}`} on:click={handleClick} class="flex items-center justify-center w-full">
	{#if iconClass}
		<span class={iconClass}></span>
	{/if}

	{#if title}
		<span>{title}</span>
	{/if}
</a>
