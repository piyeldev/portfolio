

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CH6O-uI3.js","_app/immutable/chunks/scheduler.BxhoVymB.js","_app/immutable/chunks/index.PuVT6WQY.js"];
export const stylesheets = ["_app/immutable/assets/3.D5YIustG.css"];
export const fonts = [];
