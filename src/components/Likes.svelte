<script>
	import { onDestroy, onMount } from 'svelte';
	import {
		setExecuteOnExitCallback,
		setExecuteOnIntersectCallback,
		observeElement,
		entryObserved,
		entryExited,
		disconnectObserver
	} from '$lib/index';

	import fielInPiano from '$lib/assets/fielOnPiano.png?enhanced';
	import fielOnComputer from '$lib/assets/fielOnComputer.jpg?enhanced';
	import fielCodes from '$lib/assets/fielcodes.jpg?enhanced';

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
				console.log(typewriteEffect.innerHTML);
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
			if (currentLike == 'terminal') {
				setTimeout(typewriter, 300);
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

	onDestroy(() => {
		disconnectObserver();
	});
</script>

<div class="likes w-auto flex justify-center lg:my-16 md:my-10 my-6 lg:mx-10 md:mx-6 mx-4">
	<div class="flex flex-col justify-center w-full max-w-[1440px]">
		<h1
			class="mainHeading w-full lg:text-4xl md:text-3xl text-xl border-b-blue-600 border-b-4 border-dashed mb-16"
		>
			About me - I like:
		</h1>
		<div class="flex flex-col list gap-40">
			<div class="troubleshooting hoverHere flex md:flex-row flex-col-reverse lg:gap-28 gap-6">
				<div class="flex flex-col gap-1">
					<div class="heading">Linux and troubleshooting</div>
					<p class="sub">
						Playing with the app called Termux, and using Pop!_OS as my daily driver, you can expect
						me to be familliar with linux commands and have sharp troubleshooting skills.
						<span class="text-[16px] italic text-[#9b9b9b]"
							>changing and customizing my desktop, then breaking it, then fixing it, yes that's me</span
						>
					</p>
				</div>

				<div class="wrapper animateThis w-full inline-block">
					<div class="flex translate-y-2 w-full bg-[#2B313C] pl-2 gap-8 rounded-t-md items-center">
						<div class="buttons flex gap-2">
							<div class="buttonX bg-[#BF616A] size-2 rounded-full">

							</div>
							<div class="buttonMin bg-[#8F8061] size-2 rounded-full"></div>
							<div class="buttonMax bg-[#A3BE8C] size-2 rounded-full"></div>
						</div>
						<div
							class="terminalWindow text-white  text-[16px]"
						>
							fiel@fiels-pop-os
						</div>
					</div>
					<div
						id="terminal"
						class="bg-[#343434] w-auto lg:p-5 md:p-3 p-2 obsrv md:h-48 h-32 rounded-md"
					>
						<div class="text-white source-code-pro lg:text-base md:text-sm text-xs flex gap-2">
							<span class="text-[#359006]">~</span>$
							<div bind:this={typewriteEffect} class="lg:text-base md:text-sm text-xs w-full"></div>
						</div>
						<div class="appearTerm w-full">
							<div class="source-code-pro-light text-white lg:text-base md:text-sm text-[16px]">
								Philippines/Cebu/Fiel Franco Atis Degamo
							</div>
							<div class="text-white source-code-pro sm:text-[24px] text-[18px]">
								<span class="text-[#359006]">~&nbsp;</span>$
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="maths hoverHere flex md:flex-row-reverse flex-col-reverse lg:gap-28 md:gap-28 gap-6">
				<div class="flex flex-col gap-1">
					<div class="heading">Music and Math</div>
					<p class="sub">
						One of the things i like very much; Math because it challenges me to think critically
						and find reasons why a problem exists; Music because it brings peace to my mind, and
						helps to improve my creativity.
						<span class="text-[16px] italic text-[#9b9b9b]"
							>i mainly like pop, pop rock like in the early 2000s and classical music</span
						>
					</p>
				</div>
				<div class="showcase animateThis w-full">
					<div class="grid">
						<div class="row-start-1 col-start-1 ">
							<div class="polaroid -rotate-12 lg:w-52 md:w-28 w-36">
								<enhanced:img src={fielInPiano} alt="fiel in piano" class="border-2 border-black " 
								></enhanced:img>
							</div>
						</div>
						<div class="row-start-1 col-start-1 ">
							<div class="polaroid rotate-12 lg:translate-x-32 md:translate-x-20 translate-x-24 lg:w-40 w-28">
								<enhanced:img src={fielInPiano} alt="fiel in piano" class="border-2 border-black " 
								></enhanced:img>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<div class="programming hoverHere flex md:flex-row flex-col-reverse lg:gap-14 gap-6">
				<div class="flex flex-col gap-1">
					<div class="heading">
						Designing websites and mobile apps... <br />then bringing them to life
					</div>
					<p class="sub">
						This! I love programming since I was 11 but I wasn't consistent then. Programming
						improved my patience and my problem solving skills, made me a better at googling things,
						and overall made my life full of excitement.
						<span class="text-[16px] italic text-[#9b9b9b]"
							>the first time i head of programming, i thought it was related to arranging events
							(program), like wedding, birthdays, etc.</span
						>
					</p>
				</div>
				<div class="showcase animateThis w-full lg:-translate-x-4">
					<div class="grid">
						<div class="row-start-1 col-start-1 ">
							<div class="polaroid lg:w-52 md:w-28 w-36">
								<enhanced:img src={fielOnComputer} alt="fiel in piano" class="border-2 border-black " 
								></enhanced:img>
							</div>
						</div>
						<div class="row-start-1 col-start-1 ">
							<div class="polaroid lg:-translate-y-14 md:translate-y-20 md:translate-x-0 translate-y-4 lg:-translate-x-4  translate-x-24 lg:w-40 w-28">
								<enhanced:img src={fielCodes} alt="fiel in piano" class="border-2 border-black " 
								></enhanced:img>
							</div>
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
		@apply font-light lg:text-base text-xs;
	}

	.hoverHere:hover .animateThis {
		animation-name: float;
		animation-duration: 5s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	.polaroid {
		@apply  px-2 pt-2 pb-8 border-2 border-black bg-[#f1ecda]   h-auto;
	}


	@media prefers-reduced-motion {
		.hoverHere {
			animation: none;
		}
	}
	@keyframes float {
		0% {
			transform: translateY(0);
		}
		12.5% {
			transform: translate(-5px, -2.5px);
		}
		25% {
			transform: translate(-10px, -5px);
		}
		37.5% {
			transform: translate(-5px, -7.5px);
		}
		50% {
			transform: translateY(-5px);
		}
		62.5% {
			transform: translate(5px, -7.5px);
		}
		75% {
			transform: translate(10px, -5px);
		}
		87.5% {
			transform: translate(5px, -2.5px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
