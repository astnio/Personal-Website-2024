<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import Links from './Links.svelte';
	import SocialLink from './SocialLink.svelte';

	const portrait = '/portrait_transbg_nooutline.png';
</script>

<section
	id="home"
	class="flex items-center justify-center max-w-screen-lg px-4 md:my-32 my-16 mx-auto"
>
	<div class="flex md:flex-row flex-col-reverse items-center justify-between gap-12">
		<div class="flex flex-col">
			<h1 class="h1 font-semibold uppercase tracking-widest m-0">Austin Hagel</h1>
			<div class="flex items-center justify-start mt-2 mb-8 text-xl font-light">
				<span>Web Developer</span>
				<span class="divider-vertical h-8 mx-4"></span>
				<span>Digital Designer</span>
			</div>

			<Links />
			<div class="flex items-center md:justify-start justify-center mt-8 gap-4">
				<SocialLink linkUrl="https://i.austinh.io/linkedin/" iconClass="bx bxl-linkedin-square" />
				<SocialLink linkUrl="https://i.austinh.io/instagram/" iconClass="bx bxl-instagram-alt" />
				<SocialLink linkUrl="https://i.austinh.io/youtube-dev/" iconClass="bx bxl-youtube" />
				<!-- <SocialLink linkUrl="#" iconClass="bx bxl-mastodon" /> -->
			</div>
		</div>

		<Avatar
			src={portrait}
			initials="AH"
			class="md:w-full w-32"
			background="bg-primary-400 dark:bg-primary-500 bg-opacity-25 dark:bg-opacity-25"
			border="md:border-8 border-4"
			shadow="md:shadow-2xl shadow-xl"
			rounded="rounded-full"
		/>
	</div>
</section>
