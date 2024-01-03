<script>
	import Links from '$lib/Links.svelte';
</script>

<section
	id="home"
	class="flex items-center justify-center max-w-screen-lg px-4 md:my-32 my-16 mx-auto"
>
	<div class="flex md:flex-row flex-col-reverse items-center justify-between gap-12">
		<div class="flex flex-col">
			<h1 class="sm:text-4xl text-2xl font-semibold">Hello, I am Austin Hagel</h1>
			<div class="flex gap-8 mt-1 mb-6">
				<blockquote class="blockquote">Web Developer | Digital Designer</blockquote>
			</div>

			<Links />
		</div>
		<div class="flex overflow-hidden rounded-2xl">
			<img src="https://placekitten.com/512/512" alt="Austin" class="md:w-full w-80" />
		</div>
	</div>
</section>
