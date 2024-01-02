<script lang="ts">
	export let title: string;
	export let description: string;
	export let date: string = '';
	export let gitHubLink: string = '';
	export let demoLink: string = '';
	export let tags: string[] = [];
</script>

<div class="flex flex-col card p-4">
	<header class="card-header flex flex-col">
		<span class="text-2xl font-semibold">{title}</span>
		{#if date}
			<span class="badge variant-ringed text-sm w-fit px-4 mt-1">{date}</span>
		{/if}
	</header>
	<section class="flex flex-col p-4">
		<p>{description}</p>
		<nav class="list-nav flex my-4 gap-4">
			{#if gitHubLink}
				<a href={gitHubLink} target="_blank" class="btn variant-ghost">
					<span class=" bx bxl-github text-lg"></span>
					<span>GitHub</span>
				</a>
			{/if}
			{#if demoLink}
				<a href={demoLink} target="_blank" class="btn variant-ghost">
					<span class=" bx bx-play text-lg"></span>
					<span>Demo</span>
				</a>
			{/if}
		</nav>
	</section>
	<footer class="card-footer flex gap-2">
		{#each tags as tag}
			<span class="badge variant-filled">{tag}</span>
		{/each}
	</footer>
</div>
