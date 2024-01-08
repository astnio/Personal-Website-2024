import { c as create_ssr_component, n as each, v as validate_component } from "../../../chunks/ssr.js";
const placeHolderSections = 3;
const RecentBlogPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col mx-auto max-w-screen-lg gap-8 min-w-full"><h2 class="h2" data-svelte-h="svelte-1ef1f45">Recent Blog Posts</h2> ${`${each(Array(placeHolderSections), (_, i) => {
    return `<section class="card grid-cols-2 p-4 lg:min-w-[1024px] md:min-w-[768px] sm:min-w-[640px]" data-svelte-h="svelte-1c1fnip"><div class="placeholder circle w-32 h-32 col-span-2 animate-pulse"></div> <div class="grid p-4 space-y-4"><div class="placeholder animate-pulse"></div> <div class="grid grid-cols-3 gap-8"><div class="placeholder animate-pulse"></div> <div class="placeholder animate-pulse"></div> <div class="placeholder animate-pulse"></div></div> <div class="grid grid-cols-4 gap-4"><div class="placeholder animate-pulse"></div> <div class="placeholder animate-pulse"></div> <div class="placeholder animate-pulse"></div> <div class="placeholder animate-pulse"></div> </div></div> </section>`;
  })}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-start justify-start gap-20 mt-20"><section id="about" class="flex flex-col max-w-screen-lg mx-auto justify-center p-4" data-svelte-h="svelte-1ploocg"><h1 class="h1 my-8">About</h1> <div class="flex md:block flex-col-reverse md:gap-8 gap-2 items-start"><div class="md:block flex flex-col"><p>I&#39;m a web development enthusiast with a particular knack for design, currently working
					through my ATA in Web &amp; Cloud Development. I enjoy the creative process of making websites
					look good and function well, using CSS and JavaScript to bring designs to life.</p> <br> <p>Through my studies, I&#39;ve dived deep into JavaScript with a class project that really
					opened my eyes to the power of the language. This experience led me to work on an
					e-commerce frontend mockup site on my own time to sharpen my skills. While I&#39;ve also been
					introduced to frameworks like React and Angular, my current focus is on getting a strong
					handle on JavaScript before branching out further.</p> <br> <p>The exciting part of web development for me is the diversity of projects I get to work on;
					I&#39;m not tied to any one industry. I love learning new things and applying them to
					different kinds of websites. To stay on top of new developments, I regularly follow
					developers and read articles to solve problems and discover new tech insights.</p> <br> <p>Outside of my coursework, I&#39;ve enjoyed making small games and website projects to practice
					my skills. My latest projects include a Wordguess game and an Ecommerce site frontend.</p> <br> <p>As I look to the future, I&#39;m excited to join a team where I can contribute, learn, and
					grow. If you&#39;re looking for someone who&#39;s passionate about web design and development and
					loves to learn and create, let&#39;s get in touch!</p></div></div></section> <section class="flex flex-col max-w-screen-lg mx-auto justify-center p-4">${validate_component(RecentBlogPosts, "RecentBlogPosts").$$render($$result, {}, {}, {})}</section></div>`;
});
export {
  Page as default
};
