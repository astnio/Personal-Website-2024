<script lang="ts">
	import LinkButton from '../../pages/Home/LinkButton.svelte';
	import NavLink from './NavLink.svelte';
</script>

<nav class="list-nav p-4 flex flex-col flex-grow">
	<ul class="flex flex-col md:flex-row items-baseline h-full md:h-auto">
		<li class="w-full md:w-auto">
			<NavLink linkUrl="home" title="Home" />
		</li>
		<li class="w-full md:w-auto">
			<NavLink linkUrl="about" title="About" />
		</li>
		<li class="w-full md:w-auto">
			<NavLink linkUrl="projects" title="Projects" />
		</li>
		<li class="w-full md:w-auto" style="margin-top: auto;">
			<LinkButton
				linkUrl="mailto:hello@msg.austinh.io"
				iconClass="bx bxs-envelope"
				newTab={false}
				buttonVariant="ghost"
				buttonClass="btn-sm"
			>
				<span class="semibold">Contact</span>
			</LinkButton>
		</li>
	</ul>
</nav>
