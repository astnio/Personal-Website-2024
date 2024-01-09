import { c as create_ssr_component, a as add_attribute, e as escape, b as add_styles, d as compute_slots, f as subscribe, g as createEventDispatcher, v as validate_component } from "../../chunks/ssr.js";
import { p as prefersReducedMotionStore, m as modeCurrent, s as setInitialClassState } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { g as getDrawerStore, L as LinkButton, i as initializeStores } from "../../chunks/LinkButton.js";
import { w as writable } from "../../chunks/index.js";
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0)
    $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 flex";
const cDrawer = "overflow-y-auto transition-transform";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesPosition;
  let classesWidth;
  let classesHeight;
  let classesRounded;
  let classesBackdrop;
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { position = "left" } = $$props;
  let { bgDrawer = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { bgBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { blur = "" } = $$props;
  let { padding = "" } = $$props;
  let { zIndex = "z-40" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionDrawer = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { describedby = "" } = $$props;
  let { duration = 200 } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { opacityTransition = true } = $$props;
  const presets = {
    top: {
      alignment: "items-start",
      width: "w-full",
      height: "h-[50%]",
      rounded: "rounded-bl-container-token rounded-br-container-token"
    },
    bottom: {
      alignment: "items-end",
      width: "w-full",
      height: " h-[50%]",
      rounded: "rounded-tl-container-token rounded-tr-container-token"
    },
    left: {
      alignment: "justify-start",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tr-container-token rounded-br-container-token"
    },
    right: {
      alignment: "justify-end",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tl-container-token rounded-bl-container-token"
    }
  };
  let elemBackdrop;
  let elemDrawer;
  const drawerStore = getDrawerStore();
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  const propDefaults = {
    position,
    bgBackdrop,
    blur,
    padding,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    opacityTransition,
    regionBackdrop,
    regionDrawer,
    labelledby,
    describedby,
    duration
  };
  function applyPropSettings(settings) {
    position = settings.position || propDefaults.position;
    bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
    blur = settings.blur || propDefaults.blur;
    padding = settings.padding || propDefaults.padding;
    bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
    border = settings.border || propDefaults.border;
    rounded = settings.rounded || propDefaults.rounded;
    shadow = settings.shadow || propDefaults.shadow;
    width = settings.width || propDefaults.width;
    height = settings.height || propDefaults.height;
    regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
    regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
    labelledby = settings.labelledby || propDefaults.labelledby;
    describedby = settings.describedby || propDefaults.describedby;
    opacityTransition = settings.opacityTransition || propDefaults.opacityTransition;
    duration = settings.duration || propDefaults.duration;
  }
  drawerStore.subscribe((settings) => {
    if (settings.open !== true)
      return;
    applyPropSettings(settings);
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.bgDrawer === void 0 && $$bindings.bgDrawer && bgDrawer !== void 0)
    $$bindings.bgDrawer(bgDrawer);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.bgBackdrop === void 0 && $$bindings.bgBackdrop && bgBackdrop !== void 0)
    $$bindings.bgBackdrop(bgBackdrop);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionDrawer === void 0 && $$bindings.regionDrawer && regionDrawer !== void 0)
    $$bindings.regionDrawer(regionDrawer);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.describedby === void 0 && $$bindings.describedby && describedby !== void 0)
    $$bindings.describedby(describedby);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.opacityTransition === void 0 && $$bindings.opacityTransition && opacityTransition !== void 0)
    $$bindings.opacityTransition(opacityTransition);
  classesPosition = presets[position].alignment;
  classesWidth = width ? width : presets[position].width;
  classesHeight = height ? height : presets[position].height;
  classesRounded = rounded ? rounded : presets[position].rounded;
  classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""}`;
  classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
  $$unsubscribe_drawerStore();
  $$unsubscribe_prefersReducedMotionStore();
  return ` ${$drawerStore.open === true ? `   <div class="${"drawer-backdrop " + escape(classesBackdrop, true)}" data-testid="drawer-backdrop"${add_attribute("this", elemBackdrop, 0)}>  <div class="${"drawer " + escape(classesDrawer, true)}" data-testid="drawer" role="dialog" aria-modal="true"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-describedby", describedby, 0)}${add_attribute("this", elemDrawer, 0)}> ${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { title = "Toggle light or dark mode." } = $$props;
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0)
    $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0)
    $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0)
    $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0)
    $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0)
    $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-gewkj4_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-gewkj4_END -->`, ""} <div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)}${add_attribute("title", title, 0)} tabindex="0"> <div class="${"lightswitch-thumb " + escape(classesThumb, true)}"> <svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const drawerState = writable(false);
const DrawerButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center md:hidden"><button class="btn btn-sm mr-4" data-svelte-h="svelte-3lxydg"><span class="bx bx-menu text-2xl"></span></button></div>`;
});
const AHLogoSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.48 156.88" class="fill-current"><defs><style>.cls-1 {
				stroke-width: 0px;
			}</style></defs><g id="Layer_5" data-name="Layer 5"><g><path class="cls-1" d="M0,99.41c0-33.37,24.76-56.31,56.93-56.31s56.7,22.25,56.7,58.4v55.38h-23.14v-54.69c0-23.87-14.58-36.85-33.79-36.85s-33.32,13.67-33.32,33.83,13.19,35.69,38.42,35.69h14.35l-6.94,22.01h-9.03C23.6,156.88,0,131.63,0,99.41Z"></path><path class="cls-1" d="M128.9,0h23.14v56.78c6.25-7.88,16.89-13.67,31.01-13.67,24.3,0,44.43,18.08,44.43,50.52v63.26h-23.14v-62.34c0-18.08-10.65-29.2-25.69-29.2-16.43,0-26.61,11.12-26.61,29.2v62.34h-23.14V0Z"></path></g></g></svg>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="/" class="dark:hover:text-primary-400 hover:text-primary-600 transition-colors duration-200"><div class="p-4"><span class="flex items-center justify-center w-10">${validate_component(AHLogoSVG, "AhLogoSvg").$$render($$result, {}, {}, {})}</span></div></a>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { linkUrl } = $$props;
  let { title = "" } = $$props;
  let { iconClass = "" } = $$props;
  linkUrl.split("").some((linkChar) => linkChar === "#");
  if ($$props.linkUrl === void 0 && $$bindings.linkUrl && linkUrl !== void 0)
    $$bindings.linkUrl(linkUrl);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  return `<a${add_attribute("href", `${linkUrl}`, 0)} class="flex items-center justify-center w-full">${iconClass ? `<span${add_attribute("class", iconClass, 0)}></span>` : ``} ${title ? `<span>${escape(title)}</span>` : ``}</a>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="list-nav p-4 flex flex-col flex-grow"><ul class="flex flex-col md:flex-row items-baseline h-full md:h-auto"><li class="w-full md:w-auto">${validate_component(NavLink, "NavLink").$$render($$result, { linkUrl: "/", title: "Home" }, {}, {})}</li> <li class="w-full md:w-auto">${validate_component(NavLink, "NavLink").$$render($$result, { linkUrl: "/about", title: "About" }, {}, {})}</li> <li class="w-full md:w-auto">${validate_component(NavLink, "NavLink").$$render($$result, { linkUrl: "/projects", title: "Projects" }, {}, {})}</li> <li class="w-full md:w-auto ml-2" style="margin-top: auto;">${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      linkUrl: "mailto:hello@msg.austinh.io",
      iconClass: "bx bxs-envelope",
      newTab: false,
      buttonVariant: "ghost",
      buttonClass: "btn-sm"
    },
    {},
    {
      default: () => {
        return `<span class="semibold" data-svelte-h="svelte-k961rm">Contact</span>`;
      }
    }
  )}</li></ul></nav>`;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="fixed w-full z-10 backdrop-blur-lg dark:bg-opacity-60 bg-opacity-80 dark:bg-surface-800 bg-surface-100"><div class="flex items-center justify-center w-full bg-surface-500/5"><div class="flex items-center justify-between mx-auto w-full max-w-screen-lg">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})} <div class="hidden md:flex">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}</div> ${validate_component(DrawerButton, "DrawerButton").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const FooterBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="mt-20"><div class="max-w-screen-lg w-full flex items-center justify-between mx-auto p-4"><p>© 2021-${escape((/* @__PURE__ */ new Date()).getFullYear())} Austin Hagel</p> ${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}</div></footer>`;
});
const NavigationDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $drawerState, $$unsubscribe_drawerState;
  $$unsubscribe_drawerState = subscribe(drawerState, (value) => $drawerState = value);
  initializeStores();
  const drawerStore = getDrawerStore();
  {
    if ($drawerState) {
      drawerStore.open({});
    } else {
      drawerStore.close();
    }
  }
  $$unsubscribe_drawerState();
  return `${validate_component(Drawer, "Drawer").$$render($$result, { position: "right", width: "w-64" }, {}, {
    default: () => {
      return `<div class="flex flex-col h-full"><h2 class="flex items-center justify-center p-4 cursor-default w-full uppercase tracking-wider text-primary-300/600 dark:bg-surface-700 bg-surface-200" data-svelte-h="svelte-nvawmb">Navigation</h2> <hr> <div class="flex flex-grow">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="drawerTouchController">${validate_component(NavigationDrawer, "NavigationDrawer").$$render($$result, {}, {}, {})}</div> ${validate_component(AppShell, "AppShell").$$render($$result, { scrollbarGutter: "auto" }, {}, {
    default: () => {
      return `<div class="flex flex-col justify-between h-full drawerTouchController">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(FooterBar, "FooterBar").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
export {
  Layout as default
};
