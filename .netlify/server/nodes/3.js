

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.hACPH5x3.js","_app/immutable/chunks/scheduler.jt5NCvpz.js","_app/immutable/chunks/index.jApGY5fW.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = [];
export const fonts = [];
