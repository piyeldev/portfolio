

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Ca3aUaAX.js","_app/immutable/chunks/scheduler.BxhoVymB.js","_app/immutable/chunks/index.PuVT6WQY.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.BdMAYOaf.css"];
export const fonts = [];
