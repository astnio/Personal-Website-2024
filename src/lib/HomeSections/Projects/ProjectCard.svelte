<script lang="ts">
	import { filter } from '@skeletonlabs/skeleton';

	export let title: string;
	export let description: string;
	export let date: string = '';
	export let gitHubLink: string = '';
	export let demoLink: string = '';
	export let tags: string[] = [];
	export let imageSource: string = '';
</script>

<div class="flex flex-col card overflow-hidden flex-grow">
	{#if imageSource}
		<div class="flex items-center justify-center">
			<img
				src={imageSource}
				alt={title}
				class="w-full max-w-90 aspect-video object-cover opacity-80"
			/>
		</div>
	{/if}

	<div class="flex flex-col justify-between h-full">
		<header class="card-header flex flex-col">
			<span class="flex flex-wrap md:text-2xl text-xl font-semibold">{title}</span>
			{#if date}
				<span class="badge variant-ringed text-sm w-fit px-4 mt-2">{date}</span>
			{/if}
		</header>
		<section class="flex flex-col p-4 justify-between h-full">
			<p>{description}</p>
			<nav class="list-nav flex flex-wrap my-4 gap-4">
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
		<footer class="card-footer flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="badge variant-filled">{tag}</span>
			{/each}
		</footer>
	</div>
</div>
