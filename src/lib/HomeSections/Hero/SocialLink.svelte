<script lang="ts">
	export let linkUrl: string = '';
	export let iconClass: string = '';
</script>

<a href={linkUrl} target="_blank">
	<span
		class={`${iconClass} text-4xl opacity-60 hover:opacity-100 hover:text-primary-600 dark:hover:text-primary-300 transition-all`}
	></span>
</a>
