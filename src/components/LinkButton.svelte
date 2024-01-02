<script lang="ts">
	export let linkTitle: string;
	export let linkUrl: string;
	export let iconClass: string;
	export let newTab: boolean = true;
</script>

<a href={linkUrl} target={newTab ? '_blank' : ''}>
	<button type="button" class="btn variant-soft">
		<span class={iconClass}></span>
		<span>{linkTitle}</span>
	</button>
</a>
