<script>
	import { onDestroy, onMount } from 'svelte';
	import Bar from './Bar.svelte';
	import {
		setExecuteOnExitCallback,
		setExecuteOnIntersectCallback,
		observeElement,
		entryObserved,
		entryExited,
		disconnectObserver
	} from '$lib/index';

	export let title;
	export let level;

	let element;

	let observer;
	onMount(() => {
		element = document.querySelectorAll('.tech-stack');


		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log('yes')
					entry.target.classList.add("show")
				} else {
					entry.target.classList.remove("show")
				}
			})
		})

		element.forEach((el) => observer.observe(el))

		

	});
	onDestroy(() => disconnectObserver());
</script>

<div class="tech-stack">
	<Bar progress={level} />
	<h3 class="hd">{title}</h3>
	<p class="text-[#8d8d8d] sm:text-[21px] text-18px leading-[10px]">Confidence Level {level}%</p>
	<div class="software mt-3 flex gap-3">
		<slot />
	</div>
</div>

<style lang="postcss">
	.tech-stack {
		opacity: 0;
		filter: blur(5px);
		transform: translateX(-100px);
		transition: all 1s;
	}
	.show {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}
</style>
