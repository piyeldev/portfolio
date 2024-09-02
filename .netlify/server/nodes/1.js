

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CVO5ZWXR.js","_app/immutable/chunks/scheduler.BxhoVymB.js","_app/immutable/chunks/index.PuVT6WQY.js","_app/immutable/chunks/entry.Ca4flETH.js"];
export const stylesheets = [];
export const fonts = [];
