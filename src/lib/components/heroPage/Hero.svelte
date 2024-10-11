<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import Links from './Links.svelte';
	import SocialLink from './SocialLink.svelte';

	const portrait = './images/portrait_transbg_nooutline.png';
</script>

<section id="home" class="flex items-center justify-center max-w-screen-lg px-4 mt-20 mx-auto">
	<div class="flex md:flex-row flex-col-reverse items-center justify-between gap-12">
		<div class="flex flex-col">
			<h1 class="h1 font-semibold uppercase tracking-widest m-0">Austin Hagel</h1>
			<div class="flex items-center justify-start mt-2 mb-8 text-xl font-light">
				<span>Web Developer</span>
				<span class="divider-vertical h-8 mx-4"></span>
				<span>Digital Designer</span>
			</div>

			<Links />

			<!-- <div class="flex items-center md:justify-start justify-center mt-8 gap-4"> -->
			<!-- <SocialLink linkUrl="https://astn.sh/github/" iconClass="bx bxl-github" />
				<SocialLink linkUrl="https://astn.sh/linkedin/" iconClass="bx bxl-linkedin-square" />
				<SocialLink linkUrl="https://astn.sh/frontend-mentor/" iconClass="bx bx-code-block" /> -->

			<!-- <SocialLink linkUrl="https://astn.sh/instagram/" iconClass="bx bxl-instagram-alt" /> -->
			<!-- <SocialLink linkUrl="https://astn.sh/yt-dev/" iconClass="bx bxl-youtube" /> -->
			<!-- <SocialLink linkUrl="#" iconClass="bx bxl-mastodon" /> -->
			<!-- </div> -->
		</div>

		<Avatar
			src={portrait}
			initials="AH"
			class="md:w-full w-40 max-w-96"
			background="bg-primary-400 dark:bg-primary-600 bg-opacity-10 dark:bg-opacity-10"
			border="md:border-8 border-4"
			shadow="md:shadow-2xl shadow-xl"
			rounded="rounded-full"
		/>
	</div>
</section>
