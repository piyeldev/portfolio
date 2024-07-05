<script>
	import { onDestroy, onMount } from 'svelte';
	import {
		setExecuteOnExitCallback,
		setExecuteOnIntersectCallback,
		observeElement,
		entryObserved,
		entryExited
	} from '$lib/index';

	let typewriteEffect;
	let whoami = 'whoami';
	var length = whoami.length;
	var i = 0;
	var speed = 100;

	// linux, mathMusic, programming
	let currentLike = 'terminal';
	

	let appearTerminalElement;
	onMount(() => {
		let i = 0;
		let n = 1;
		let obsrvElements = document.querySelectorAll('.obsrv');
		obsrvElements.forEach((el) => observeElement(el));

		function typewriter() {
			if (i < length) {
				typewriteEffect.innerHTML += whoami.charAt(i);
				i++;
				setTimeout(typewriter, speed);
			} else if (i === length) {
				setTimeout(appearTerminalElement.classList.remove('hidden'), 800);
			} else {
				appearTerminalElement.classList.add('hidden');
			}

			return;
		}

		appearTerminalElement = document.querySelector('.appearTerm');

		setExecuteOnIntersectCallback(() => {
			currentLike = entryObserved.target.id;

			console.log(currentLike)

			if (currentLike == 'terminal') {
				

				setTimeout(typewriter, 300);
			} else if (currentLike == 'musicMath') {
			} else if (currentLike == 'programming') {
			} else {
				console.warn('Error in Transitions');
			}
		});

		let elementExited;
		setExecuteOnExitCallback(() => {
			elementExited = entryExited.target.id;

			if (elementExited == 'terminal') {
				appearTerminalElement.classList.add('hidden');
				typewriteEffect.innerHTML = '';
				i = 0;
			} else {
				return;
			}
		});
	});

</script>

<div class="likes w-auto  flex justify-center lg:my-16 md:my-10 my-6 lg:mx-10 md:mx-6 mx-4">
	<div class="flex flex-col justify-center w-full max-w-[1440px]">
		<h1 class="mainHeading w-full lg:text-4xl md:text-3xl text-xl border-b-blue-600 border-b-4 border-dashed mb-4">About me - I like:</h1>
		<div class="flex flex-col list gap-40">
			<div class="troubleshooting flex md:flex-row flex-col-reverse lg:gap-28 gap-6">
				
				
				<div class="flex flex-col gap-1">
					<div class="heading" >Linux and troubleshooting</div>
					<p class="sub">
						Playing with the app called Termux, and using Pop!_OS as my daily driver, you can
								expect me to be familliar with linux commands and have sharp troubleshooting skills.
								<span class="text-[16px] italic text-[#9b9b9b]"
									>changing and customizing my desktop, then breaking it, then fixing it, yes that's
									me</span
								>
					</p>
				</div>

				<div class="wrapper w-full">
					<div class="terminal bg-[#343434] lg:max-w-[512px] w-auto lg:p-5 md:p-3 p-2 obsrv h-48 rounded-md">
						<div class="text-white source-code-pro lg:text-base md:text-sm text-xs flex gap-2">
							<span class="text-[#359006]">~</span>$
							<div bind:this={typewriteEffect} class="lg:text-base md:text-sm text-xs">whoami</div>
						</div>
						<div class="appearTerm w-full">
							<div class="source-code-pro-light text-white lg:text-base md:text-sm text-xs">
								Philippines/Cebu/Fiel Franco Atis Degamo
							</div>
							<div class="text-white source-code-pro sm:text-[24px] text-[18px]">
								<span class="text-[#359006]">~&nbsp;</span>$
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div class="maths flex md:flex-row-reverse flex-col-reverse lg:gap-28 gap-6">
				<div class="flex flex-col gap-1">
					<div class="heading" >Music and Math</div>
					<p class="sub">
						One of the things i like very much; Math because it challenges me to think critically and
							find reasons why a problem exists; Music because it brings peace to my mind, and helps
							to improve my creativity.
							<span class="text-[16px] italic text-[#9b9b9b]"
								>i mainly like pop, pop rock like in the early 2000s and classical music</span
							>
					</p>
				</div>
				<div class="terminal bg-[#343434] lg:p-5 md:p-3 p-2 obsrv h-48 rounded-md">
					<div class="text-white source-code-pro lg:text-base md:text-sm text-xs flex gap-2">
						<span class="text-[#359006]">~</span>$
						<div bind:this={typewriteEffect} class="lg:text-base md:text-sm text-xs">whoami</div>
					</div>
					<div class="appearTerm w-full">
						<div class="source-code-pro-light text-white lg:text-base md:text-sm text-xs">
							Philippines/Cebu/Fiel Franco Atis Degamo
						</div>
						<div class="text-white source-code-pro sm:text-[24px] text-[18px]">
							<span class="text-[#359006]">~&nbsp;</span>$
						</div>
					</div>
				</div>
			</div>
			<div class="programming flex md:flex-row flex-col-reverse lg:gap-28 gap-6">
				<div class="flex flex-col gap-1">
					<div class="heading" >Designing websites and mobile apps... <br />then bringing them to life</div>
					<p class="sub">
						This! I love programming since I was 11 but I wasn't consistent then. Programming
							improved my patience and my problem solving skills, made me a better at googling
							things, and overall made my life full of excitement.
							<span class="text-[16px] italic text-[#9b9b9b]"
								>the first time i head of programming, i thought it was related to arranging events
								(program), like wedding, birthdays, etc.</span
							>
					</p>
				</div>
				<div class="terminal bg-[#343434] lg:p-5 md:p-3 p-2 obsrv h-48 rounded-md">
					<div class="text-white source-code-pro lg:text-base md:text-sm text-xs flex gap-2">
						<span class="text-[#359006]">~</span>$
						<div bind:this={typewriteEffect} class="lg:text-base md:text-sm text-xs">whoami</div>
					</div>
					<div class="appearTerm w-full">
						<div class="source-code-pro-light text-white lg:text-base md:text-sm text-xs">
							Philippines/Cebu/Fiel Franco Atis Degamo
						</div>
						<div class="text-white source-code-pro sm:text-[24px] text-[18px]">
							<span class="text-[#359006]">~&nbsp;</span>$
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>

<style lang="postcss">
	.hideTerminal {
		transform-origin: bottom center;
		transform: scale(0);
		transition: 300ms transform;
	}
	.showTerminal {
		transform: scale(1);
	}
	.hideSub {
		@apply hidden;
	}

	.heading {
		@apply text-xl font-semibold leading-none;
	}

	.sub {
		@apply font-light lg:text-base text-xs
	}
</style>
