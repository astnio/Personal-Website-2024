<script lang="ts">
	export let linkUrl: string;
	export let iconClass: string;
	export let buttonClass: string = '';
	export let newTab: boolean = true;
	export let buttonVariant: string = 'soft';
</script>

<a
	href={linkUrl}
	target={newTab ? '_blank' : ''}
	class={`btn variant-${buttonVariant} ${buttonClass} w-full sm:w-auto`}
>
	<span class={iconClass}></span>
	<span><slot /></span>
</a>
