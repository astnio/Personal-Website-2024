<script lang="ts">
	import RecentBlogPosts from '$lib/components/RecentBlogPosts.svelte';
</script>

<div class="flex flex-col items-start justify-start gap-20 mt-20">
	<section id="about" class="flex flex-col max-w-screen-lg mx-auto justify-center p-4">
		<h1 class="h1 my-8">About</h1>
		<div class="flex md:block flex-col-reverse md:gap-8 gap-2 items-start">
			<div class="md:block flex flex-col">
				<p>
					I'm a web development enthusiast with a particular knack for design, currently working
					through my ATA in Web & Cloud Development. I enjoy the creative process of making websites
					look good and function well, using CSS and JavaScript to bring designs to life.
				</p>
				<br />
				<p>
					Through my studies, I've dived deep into JavaScript with a class project that really
					opened my eyes to the power of the language. This experience led me to work on an
					e-commerce frontend mockup site on my own time to sharpen my skills. While I've also been
					introduced to frameworks like React and Angular, my current focus is on getting a strong
					handle on JavaScript before branching out further.
				</p>
				<br />
				<p>
					The exciting part of web development for me is the diversity of projects I get to work on;
					I'm not tied to any one industry. I love learning new things and applying them to
					different kinds of websites. To stay on top of new developments, I regularly follow
					developers and read articles to solve problems and discover new tech insights.
				</p>
				<br />
				<p>
					Outside of my coursework, I've enjoyed making small games and website projects to practice
					my skills. My latest projects include a Wordguess game and an Ecommerce site frontend.
				</p>
				<br />
				<p>
					As I look to the future, I'm excited to join a team where I can contribute, learn, and
					grow. If you're looking for someone who's passionate about web design and development and
					loves to learn and create, let's get in touch!
				</p>
			</div>
		</div>
	</section>

	<section class="flex flex-col max-w-screen-lg mx-auto justify-center p-4">
		<RecentBlogPosts />
	</section>
</div>
