<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<section id="projects" class="flex flex-col max-w-screen-lg mx-auto mt-20 p-4 w-full">
	<h1 class="h1 my-8">Projects</h1>
	<p class="mb-8">
		I also have some projects at&nbsp;<a
			class="underline"
			href="https://frontendmentor.io"
			target="_blank">Frontend Mentor</a
		>

		. You can
		<a class="underline" href="https://astn.sh/frontend-mentor" target="_blank"
			>view my profile and projects</a
		>
		I have done with them.
	</p>
	<ul class="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full">
		<li class="flex items-stretch">
			<ProjectCard
				title="TypeScript E-Commerce Frontend"
				description="A remake of my JavaScript E-commerce shop mockup, now with Vite!"
				date="Feb 2024"
				gitHubLink="https://astn.sh/gh-ts-simple-e-com"
				demoLink="https://astn.sh/ts-simple-e-com"
				tags={['TypeScript', 'Vite', 'HTML/CSS']}
				imageSource="./images/ts-e-com.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="Personal Website (2024)"
				description="My personal website, the very one you are at right now!"
				date="Dec 2023"
				gitHubLink="https://astn.sh/gh-personal-site-2024"
				tags={['SvelteKit', 'Skeleton', 'Tailwind', 'TypeScript']}
				imageSource="./images/personal_website.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="WordGuess Game (React)"
				description="A game where you guess a letter to find the word. Fetches a random word from an API and uses Framer Motion for some animation when changing pages."
				date="Dec 2023"
				gitHubLink="https://astn.sh/gh-rtt-wordguess"
				demoLink="https://astn.sh/rtt-wordguess"
				tags={['React', 'Tailwind', 'TypeScript', 'Framer Motion']}
				imageSource="./images/rtt_wordguess.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="JavaScript E-Commerce Frontend"
				description="The frontend mockup of an e-commerce site. Made with just JavaScript and CSS/HTML."
				date="Aug 2023"
				gitHubLink="https://astn.sh/gh-js-simple-e-com"
				demoLink="https://astn.sh/js-simple-e-com"
				tags={['HTML', 'CSS', 'JavaScript']}
				imageSource="./images/simple_ecom.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="WordGuess Game (JavaScript)"
				description="A basic game to guess the word, made in just HTML and JavaScript. Just uses a small list of words from a local JSON file."
				date="Jul 2023"
				gitHubLink="https://astn.sh/gh-js-simple-wordguess"
				demoLink="https://astn.sh/js-simple-wordguess"
				tags={['HTML', 'CSS', 'JavaScript']}
				imageSource="./images/js-wordguess1.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="Personal Website (2023)"
				description="The second iteration of my personal website."
				date="May 2023"
				gitHubLink="https://astn.sh/gh-personal-site-2023"
				demoLink="https://astn.sh/personal-site-2023"
				tags={['HTML', 'CSS']}
				imageSource="./images/personal-site-2023.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="Personal Website (2022)"
				description="My first public version of my own personal website."
				date="Feb 2022"
				gitHubLink="https://astn.sh/gh-personal-site-2022"
				demoLink="https://astn.sh/personal-site-2022"
				tags={['HTML', 'CSS']}
				imageSource="./images/personal-site-2022.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="Simple E-Commerce Frontend 2021"
				description="One of my first attempts at making a website, and an e-commerce site at that."
				date="Nov 2021"
				gitHubLink="https://astn.sh/gh-js-simple-e-com-2021"
				demoLink="https://astn.sh/js-simple-e-com-2021"
				tags={['HTML', 'CSS']}
				imageSource="./images/js-simple-e-com-2021.png"
			/>
		</li>
	</ul>
	<slot />
</section>
