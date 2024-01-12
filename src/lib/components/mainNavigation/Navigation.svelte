<script lang="ts">
	import LinkButton from '../LinkButton.svelte';
	import NavLink from './NavLink.svelte';
</script>

<nav class="list-nav p-4 flex flex-col flex-grow items-center w-full">
	<ul class="flex flex-col md:flex-row md:items-baseline items-center h-full md:h-auto w-full">
		<li class="w-full md:w-auto">
			<NavLink linkUrl="/" title="Home" />
		</li>
		<li class="w-full md:w-auto">
			<NavLink linkUrl="/about" title="About" />
		</li>
		<li class="w-full md:w-auto">
			<NavLink linkUrl="/projects" title="Projects" />
		</li>
		<li class="w-full md:w-auto ml-2" style="margin-top: auto;">
			<LinkButton
				linkUrl="mailto:hello@msg.austinh.io"
				iconClass="bx bxs-envelope"
				newTab={false}
				buttonVariant="soft-primary"
				buttonClass="btn-sm"
			>
				<span class="font-semibold sm:text-base text-lg tracking-wide">Contact</span>
			</LinkButton>
		</li>
	</ul>
</nav>
