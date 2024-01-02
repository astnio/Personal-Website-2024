<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	let theme: boolean;
	let badgeContainer: HTMLDivElement | null = null;

	const unsubscribe = modeCurrent.subscribe((value) => {
		theme = value;
		updateBadge();
	});

	function updateBadge() {
		if (!badgeContainer) return;
		while (badgeContainer.firstChild) {
			badgeContainer.firstChild.remove();
		}

		const badge = document.createElement('div');
		badge.className = 'badge-base LI-profile-badge';
		badge.dataset.locale = 'en_US';
		badge.dataset.size = 'large';
		badge.dataset.theme = theme == false ? 'dark' : 'light';
		badge.dataset.type = 'HORIZONTAL';
		badge.dataset.vanity = 'austinhagel';
		badge.dataset.version = 'v1';
		badgeContainer.appendChild(badge);

		// Load LinkedIn script
		const script = document.createElement('script');
		script.src = 'https://platform.linkedin.com/badges/js/profile.js';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
	}

	onMount(updateBadge);

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div bind:this={badgeContainer}></div>
