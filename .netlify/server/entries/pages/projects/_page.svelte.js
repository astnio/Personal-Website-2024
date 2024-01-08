import { c as create_ssr_component, a as add_attribute, e as escape, n as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { date = "" } = $$props;
  let { gitHubLink = "" } = $$props;
  let { demoLink = "" } = $$props;
  let { tags = [] } = $$props;
  let { imageSource = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.gitHubLink === void 0 && $$bindings.gitHubLink && gitHubLink !== void 0)
    $$bindings.gitHubLink(gitHubLink);
  if ($$props.demoLink === void 0 && $$bindings.demoLink && demoLink !== void 0)
    $$bindings.demoLink(demoLink);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.imageSource === void 0 && $$bindings.imageSource && imageSource !== void 0)
    $$bindings.imageSource(imageSource);
  return `<div class="flex flex-col card overflow-hidden flex-grow">${imageSource ? `<div class="flex items-center justify-center"><img${add_attribute("src", imageSource, 0)}${add_attribute("alt", title, 0)} class="w-full max-w-90 aspect-video object-cover opacity-80"></div>` : ``} <div class="flex flex-col justify-between h-full"><header class="card-header flex flex-col"><span class="flex flex-wrap md:text-2xl text-xl font-semibold">${escape(title)}</span> ${date ? `<span class="badge variant-ringed text-sm w-fit px-4 mt-2">${escape(date)}</span>` : ``}</header> <section class="flex flex-col p-4 justify-between h-full"><p>${escape(description)}</p> <nav class="list-nav flex flex-wrap my-4 gap-4">${gitHubLink ? `<a${add_attribute("href", gitHubLink, 0)} target="_blank" class="btn variant-ghost"><span class="bx bxl-github text-lg"></span> <span data-svelte-h="svelte-1l01zul">GitHub</span></a>` : ``} ${demoLink ? `<a${add_attribute("href", demoLink, 0)} target="_blank" class="btn variant-ghost"><span class="bx bx-play text-lg"></span> <span data-svelte-h="svelte-1wnsldt">Demo</span></a>` : ``}</nav></section> <footer class="card-footer flex flex-wrap gap-2">${each(tags, (tag) => {
    return `<span class="badge variant-filled">${escape(tag)}</span>`;
  })}</footer></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="projects" class="flex flex-col max-w-screen-lg mx-auto mt-20 p-4 w-full"><h1 class="h1 my-8" data-svelte-h="svelte-nwxat3">Projects</h1> <ul class="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full"><li class="flex items-stretch">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Personal Website (2024)",
      description: "My personal website, the very one you are at right now! Made using SvelteKit, Skeleton UI + Tailwind, and TypeScript.",
      date: "Dec 2023 - Present",
      gitHubLink: "https://github.com/austinh-io/Personal-Website-2024",
      tags: ["SvelteKit", "Skeleton", "Tailwind", "TypeScript"],
      imageSource: "./images/personal_website.png"
    },
    {},
    {}
  )}</li> <li class="flex items-stretch">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "React/TypeScript/Tailwind (RTT) WordGuess Game",
      description: "This is another WordGuess game, this time made with React, TypeScript, and Tailwind.",
      date: "Dec 2023 - Jan 2024",
      gitHubLink: "https://github.com/austinh-io/RTT-WordGuess",
      demoLink: "https://projects.austinh.io/rtt-wordguess",
      tags: ["React", "Tailwind", "TypeScript", "Framer Motion"],
      imageSource: "./images/rtt_wordguess.png"
    },
    {},
    {}
  )}</li> <li class="flex items-stretch">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Simple Ecommerce Frontend",
      description: "The frontend mockup of an ecommerce site. Made with vanilla JavaScript, CSS, and HTML.",
      date: "Aug 2023 - Dec 2023",
      gitHubLink: "https://github.com/austinh-io/Simple-Ecommerce-Frontend",
      demoLink: "https://projects.austinh.io/simple-ecom/",
      tags: ["HTML", "CSS", "JavaScript"],
      imageSource: "./images/simple_ecom.png"
    },
    {},
    {}
  )}</li></ul> ${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  Page as default
};
