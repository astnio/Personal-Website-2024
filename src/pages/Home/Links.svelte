<script>
	import LinkButton from './LinkButton.svelte';
</script>

<ul class="flex gap-2 sm:flex-row flex-col items-center sm:items-start w-full">
	<li class="w-full sm:w-auto">
		<LinkButton linkUrl="https://i.austinh.io/github/" iconClass="bx bxl-github">GitHub</LinkButton>
	</li>

	<li class="w-full sm:w-auto">
		<LinkButton linkUrl="https://i.austinh.io/linkedin/" iconClass="bx bxl-linkedin">
			LinkedIn
		</LinkButton>
	</li>

	<li class="w-full sm:w-auto">
		<LinkButton linkUrl="https://byaustin.net/" iconClass="bx bx-book-content">Blog</LinkButton>
	</li>

	<li class="w-full sm:w-auto">
		<LinkButton linkUrl="#projects" newTab={false} iconClass="bx bx-code-alt">Projects</LinkButton>
	</li>
</ul>
