<script>
	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="flex flex-col max-w-screen-lg mx-auto p-4 w-full">
	<h2 class="text-4xl">Projects</h2>
	<hr class="my-2 mb-4" />
	<ul class="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full">
		<li class="flex items-stretch">
			<ProjectCard
				title="Personal Website (2024)"
				description="My personal website, the very one you are at right now! Made using SvelteKit, Skeleton UI + Tailwind, and TypeScript."
				date="Dec 2023 - Present"
				gitHubLink="https://github.com/austinh-io/Personal-Website-2024"
				tags={['SvelteKit', 'Skeleton', 'TailWind', 'TypeScript']}
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="React/TypeScript/Tailwind (RTT) WordGuess Game"
				description="This is another WordGuess game, this time made with React, TypeScript, and Tailwind."
				date="Dec 2023 - Jan 2024"
				gitHubLink="https://github.com/austinh-io/RTT-WordGuess"
				demoLink="https://projects.austinh.io/rtt-wordguess"
				tags={['React', 'TailWind', 'TypeScript']}
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="Simple Ecommerce Frontend"
				description="The frontend mockup of an ecommerce site. Made with vanilla JavaScript, CSS, and HTML."
				date="Aug 2023 - Dec 2023"
				gitHubLink="https://github.com/austinh-io/Simple-Ecommerce-Frontend"
				demoLink="https://projects.austinh.io/simple-ecom/"
				tags={['HTML5', 'CSS3', 'JavaScript']}
			/>
		</li>
	</ul>
	<slot />
</section>
