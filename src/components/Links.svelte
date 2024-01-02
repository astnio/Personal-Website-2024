<script>
	import LinkButton from './LinkButton.svelte';
</script>

<ul class="flex gap-2">
	<li>
		<LinkButton
			linkTitle="GitHub"
			linkUrl="https://i.austinh.io/github/"
			iconClass="bx bxl-github"
		/>
	</li>
	<li>
		<LinkButton
			linkTitle="LinkedIn"
			linkUrl="https://i.austinh.io/linkedin/"
			iconClass="bx bxl-linkedin"
		/>
	</li>
	<li>
		<LinkButton
			linkTitle="Demos"
			linkUrl="https://projects.austinh.io/"
			iconClass="bx bx-code-alt"
		/>
	</li>
	<li>
		<LinkButton linkTitle="Blog" linkUrl="https://byaustin.net/" iconClass="bx bx-book-content" />
	</li>
</ul>

<style>
	a {
		text-decoration: underline;
	}
</style>
