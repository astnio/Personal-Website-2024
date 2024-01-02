<script>
	import LinkButton from './LinkButton.svelte';
	import Logo from './Logo.svelte';
</script>

<div class="w-full p-4 dark:bg-surface-800 bg-surface-100">
	<nav class="max-w-screen-lg w-full flex items-center justify-between mx-auto">
		<Logo />
		<div>
			<ul class="flex items-center justify-center gap-4">
				<li><a class="anchor" href="/">About</a></li>
				<li><a class="anchor" href="/">Projects</a></li>
				<li>
					<LinkButton
						linkUrl="mailto:hello@msg.austinh.io"
						iconClass="bx bxs-envelope"
						newTab={false}
						buttonVariant="filled"
						buttonClass="btn-sm"
					>
						<span class="font-bold relative bottom-[0.1rem]">Contact</span>
					</LinkButton>
				</li>
			</ul>
		</div>
	</nav>
</div>
