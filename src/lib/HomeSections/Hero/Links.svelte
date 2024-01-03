<script>
	import LinkButton from './LinkButton.svelte';
</script>

<ul class="flex flex-wrap gap-2 sm:flex-row flex-col items-center sm:items-start w-full">
	<li class="w-full sm:w-auto">
		<LinkButton linkUrl="#projects" newTab={false} iconClass="bx bx-code-alt">Projects</LinkButton>
	</li>

	<li class="w-full sm:w-auto">
		<LinkButton linkUrl="https://byaustin.net/" iconClass="bx bx-book-content">Blog</LinkButton>
	</li>

	<li class="w-full sm:w-auto">
		<LinkButton
			linkUrl="https://i.austinh.io/hackerrank/"
			newTab={true}
			iconClass="bx bx-code-block">HackerRank</LinkButton
		>
	</li>

	<li class="w-full sm:w-auto">
		<LinkButton linkUrl="https://i.austinh.io/leetcode/" newTab={true} iconClass="bx bx-code-curly"
			>LeetCode</LinkButton
		>
	</li>

	<li class="w-full sm:w-auto">
		<LinkButton linkUrl="https://i.austinh.io/codepen/" newTab={true} iconClass="bx bxl-codepen"
			>CodePen</LinkButton
		>
	</li>
</ul>
