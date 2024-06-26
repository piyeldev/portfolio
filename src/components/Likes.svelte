<script>
	import { onDestroy, onMount } from 'svelte';
	import {
		setExecuteOnIntersectCallback,
		setExecuteOnExitCallback,
		observeElement,
		unobserveElement
	} from '$lib/index';

	let elementToObserve;

	let startClassAdd = '';
	let target;

	let typewriteEffect;
	let whoami = 'whoami';
	var length = whoami.length;
	var i = 0;
	var speed = 50;
	function typewriter() {
		if (i < length) {
			typewriteEffect.innerHTML += whoami.charAt(i);
			i++;
			setTimeout(typewriter, speed);
		}
	}

	onMount(() => {
		function onIntersect() {
			target.classList.add('showTerminal');
			setTimeout(typewriter, 900);
		}
		function onExit() {
			target.classList.remove('showTerminal');
			typewriteEffect.innerHTML = '';
		}

		setExecuteOnIntersectCallback(onIntersect);
		setExecuteOnExitCallback(onExit);

		if (elementToObserve) {
			observeElement(elementToObserve);
		}
	});

	onDestroy(() => {
		unobserveElement(elementToObserve);
	});
</script>

<section id="likes " class="mt-20 mb-20 flex justify-center">
	<div class="sm:mx-20 mx-5">
		<div class="relative h-[200vh]">
			<div class="sticky top-[25%]">
				<div class="flex items-center flex-col lg:flex-row lg:gap-16 md:gap-8 gap-2">
					<div class="left hideTerminal {startClassAdd}" bind:this={target}>
						<div class="terminal sm:h-60 h-40 bg-[#343434] rounded-3xl box-border sm:p-6 py-4 px-6">
							<div class="text-white source-code-pro sm:text-[24px] text-[18px] flex gap-2">
								<span class="text-[#359006]">~&nbsp;</span>$
								<div bind:this={typewriteEffect} class=""></div>
							</div>
							<div class="source-code-pro-light text-white sm:text-[24px] text-[18px]">
								Philippines/Cebu/Fiel Franco Atis Degamo
							</div>
							<div class="text-white source-code-pro sm:text-[24px] text-[18px]">
								<span class="text-[#359006]">~&nbsp;</span>$
							</div>
						</div>
					</div>

					<div class="right flex flex-col">
						<h2 class="">I like</h2>
						<p class="">Tinkering things in the terminal</p>
						<p class="text-14px md:text-[16px] lg:text-[18px] p-2 font-light max-w-[780px]">
							Playing with the app called Termux, you will find me install several operating systems
							on my phone, and that aid my familliarity with basic Linux commands that help in my
							journey to being a software engineer
						</p>
						<p class="unhighlight">Music and Math</p>
						<p class="unhighlight">
							Designing websites and mobile apps... <br />then bringing them to life
						</p>
					</div>
				</div>
			</div>
			<div bind:this={elementToObserve}></div>
		</div>
	</div>
</section>

<style>
	.unhighlight {
		@apply text-neutral-500;
	}

	.hideTerminal {
		transform-origin: bottom center;
		transform: scale(0);
		transition: 300ms transform;
	}
	.showTerminal {
		transform: scale(1);
	}
</style>
