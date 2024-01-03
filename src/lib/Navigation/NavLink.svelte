<script lang="ts">
	import { drawerState } from '../../stores';

	export let linkUrl: string;
	export let title: string = '';
	export let iconClass: string = '';

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
</script>

<a
	href={`#${linkUrl}`}
	on:click|preventDefault={(event) => {
		scrollToSection(event, linkUrl);
		handleClose();
	}}
	class="flex items-center justify-center w-full"
>
	{#if iconClass}
		<span class={iconClass}></span>
	{/if}

	{#if title}
		<span>{title}</span>
	{/if}
</a>
