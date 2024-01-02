<script>
	import LinkButton from './LinkButton.svelte';
</script>

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
