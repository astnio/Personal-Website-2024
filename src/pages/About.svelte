<script lang="ts">
	import { onMount } from 'svelte';

	let theme: string;
	function handleThemeSwitched(event) {
		theme = event.detail;
	}

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://platform.linkedin.com/badges/js/profile.js';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
	});
</script>

<section
	id="about"
	class="flex flex-col max-w-screen-lg mx-auto justify-center pb-60 p-4 h-[100svh]"
>
	<h2 class="text-4xl">About</h2>
	<hr class="my-2" />
	<div class="flex flex-col gap-4">
		<p>
			I'm a web development enthusiast with a particular knack for design, currently working through
			my ATA in Web & Cloud Development. I enjoy the creative process of making websites look good
			and function well, using CSS and JavaScript to bring designs to life.
		</p>
		<p>
			Through my studies, I've dived deep into JavaScript with a class project that really opened my
			eyes to the power of the language. This experience led me to work on an e-commerce frontend
			mockup site on my own time to sharpen my skills. While I've also been introduced to frameworks
			like React and Angular, my current focus is on getting a strong handle on JavaScript before
			branching out further.
		</p>
		<p>
			The exciting part of web development for me is the diversity of projects I get to work on; I'm
			not tied to any one industry. I love learning new things and applying them to different kinds
			of websites. To stay on top of new developments, I regularly follow developers and read
			articles to solve problems and discover new tech insights.
		</p>
		<p>
			Outside of my coursework, I've enjoyed making small games and website projects to practice my
			skills. My latest projects include a Wordguess game and an Ecommerce site frontend.
		</p>
		<p>
			As I look to the future, I'm excited to join a team where I can contribute, learn, and grow.
			If you're looking for someone who's passionate about web design and development and loves to
			learn and create, let's get in touch!
		</p>
	</div>
	<div
		class="badge-base LI-profile-badge mt-8"
		data-locale="en_US"
		data-size="large"
		data-theme={theme === 'light' ? 'light' : 'dark'}
		data-type="HORIZONTAL"
		data-vanity="austinhagel"
		data-version="v1"
	>
		<a
			class="badge-base__link LI-simple-link"
			href="https://www.linkedin.com/in/austinhagel?trk=profile-badge">Austin H.</a
		>
	</div>
</section>
