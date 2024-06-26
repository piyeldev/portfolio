<script>
	import { onMount, onDestroy } from 'svelte';

	export let showClass;
	export let hideClass;
	let observeElement;
	let observer;

	let executeONIntersectCallback = null;
	function executeOnIntersect(callback) {
		executeONIntersectCallback = callback;
	}
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log('working! very good!');
					entry.target.classList.add(showClass);

					executeOnIntersect();
				}
			});
		});

		if (executeONIntersectCallback) {
			executeOnIntersect();
		}
		if (observeElement) {
			observer.observe(observeElement);
		}
	});
	onDestroy(() => {
		if (observeElement && observer) {
			observer.unobserve(observeElement);
		}
	});

	export { executeOnIntersect };
</script>

<div bind:this={observeElement} class={hideClass}><slot /></div>
