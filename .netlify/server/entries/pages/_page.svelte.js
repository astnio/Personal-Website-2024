import { c as create_ssr_component, i as compute_rest_props, e as escape, j as spread, k as escape_attribute_value, l as escape_object, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { L as LinkButton, i as initializeStores } from "../../chunks/LinkButton.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
let cBase = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full h-full object-cover";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "initials",
    "fill",
    "fontSize",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  let { initials = "AB" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { fontSize = 150 } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.initials === void 0 && $$bindings.initials && initials !== void 0)
    $$bindings.initials(initials);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.actionParams === void 0 && $$bindings.actionParams && actionParams !== void 0)
    $$bindings.actionParams(actionParams);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
  return `  <figure class="${"avatar " + escape(classesBase, true)}" data-testid="avatar">${src ? `<img${spread(
    [
      {
        class: "avatar-image " + escape(cImage, true)
      },
      {
        style: escape_attribute_value($$props.style ?? "")
      },
      { src: escape_attribute_value(src) },
      {
        alt: escape_attribute_value($$props.alt || "")
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>` : `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${add_attribute("font-size", fontSize, 0)} class="${"avatar-text " + escape(fill, true)}">${escape(String(initials).substring(0, 2).toUpperCase())}</text></svg>`}</figure>`;
});
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul class="flex flex-wrap gap-2 sm:flex-row flex-col items-center sm:items-start w-full"><li class="w-full sm:w-auto">${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      linkUrl: "/projects",
      newTab: false,
      iconClass: "bx bx-code-alt"
    },
    {},
    {
      default: () => {
        return `Projects`;
      }
    }
  )}</li> <li class="w-full sm:w-auto">${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      linkUrl: "https://byaustin.net/",
      iconClass: "bx bx-book-content"
    },
    {},
    {
      default: () => {
        return `Blog`;
      }
    }
  )}</li> <li class="w-full sm:w-auto">${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      linkUrl: "https://i.austinh.io/hackerrank/",
      newTab: true,
      iconClass: "bx bx-code-block"
    },
    {},
    {
      default: () => {
        return `HackerRank`;
      }
    }
  )}</li> <li class="w-full sm:w-auto">${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      linkUrl: "https://i.austinh.io/leetcode/",
      newTab: true,
      iconClass: "bx bx-code-curly"
    },
    {},
    {
      default: () => {
        return `LeetCode`;
      }
    }
  )}</li> </ul>`;
});
const SocialLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { linkUrl = "" } = $$props;
  let { iconClass = "" } = $$props;
  if ($$props.linkUrl === void 0 && $$bindings.linkUrl && linkUrl !== void 0)
    $$bindings.linkUrl(linkUrl);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  return `<a${add_attribute("href", linkUrl, 0)} target="_blank"><span${add_attribute("class", `${iconClass} text-4xl opacity-60 hover:opacity-100 hover:text-primary-600 dark:hover:text-primary-300 transition-all`, 0)}></span></a>`;
});
const portrait = "./images/portrait_transbg_nooutline.png";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="home" class="flex items-center justify-center max-w-screen-lg px-4 mt-20 mx-auto"><div class="flex md:flex-row flex-col-reverse items-center justify-between gap-12"><div class="flex flex-col"><h1 class="h1 font-semibold uppercase tracking-widest m-0" data-svelte-h="svelte-1frh6k8">Austin Hagel</h1> <div class="flex items-center justify-start mt-2 mb-8 text-xl font-light" data-svelte-h="svelte-18nu44w"><span>Web Developer</span> <span class="divider-vertical h-8 mx-4"></span> <span>Digital Designer</span></div> ${validate_component(Links, "Links").$$render($$result, {}, {}, {})} <div class="flex items-center md:justify-start justify-center mt-8 gap-4">${validate_component(SocialLink, "SocialLink").$$render(
    $$result,
    {
      linkUrl: "https://i.austinh.io/github/",
      iconClass: "bx bxl-github"
    },
    {},
    {}
  )} ${validate_component(SocialLink, "SocialLink").$$render(
    $$result,
    {
      linkUrl: "https://i.austinh.io/linkedin/",
      iconClass: "bx bxl-linkedin-square"
    },
    {},
    {}
  )} ${validate_component(SocialLink, "SocialLink").$$render(
    $$result,
    {
      linkUrl: "https://i.austinh.io/instagram/",
      iconClass: "bx bxl-instagram-alt"
    },
    {},
    {}
  )}  </div></div> ${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: portrait,
      initials: "AH",
      class: "md:w-full w-40 max-w-96",
      background: "bg-primary-400 dark:bg-primary-600 bg-opacity-10 dark:bg-opacity-10",
      border: "md:border-8 border-4",
      shadow: "md:shadow-2xl shadow-xl",
      rounded: "rounded-full"
    },
    {},
    {}
  )}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  initializeStores();
  return `<div class="flex h-full items-center">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
