import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.iZvPJSmO.js","_app/immutable/chunks/scheduler.jt5NCvpz.js","_app/immutable/chunks/index.jApGY5fW.js","_app/immutable/chunks/LinkButton.EpQezsep.js","_app/immutable/chunks/index.LRxaQyz2.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.CI_HSv6x.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.oq5aOWfL.css"];
export const fonts = [];
