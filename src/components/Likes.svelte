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
	let currentLike = 'linux';
	let terminal;
	let mAndm;
	let prog;

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
			}
			else if (i === length) {
				setTimeout(appearTerminalElement.classList.remove('hidden'), 800)
				
			} else {
				appearTerminalElement.classList.add('hidden')
			}

			return;
		}

		terminal = document.querySelector('.terminal');
		appearTerminalElement = document.querySelector('.appearTerm');

		setExecuteOnIntersectCallback(() => {
			currentLike = entryObserved.target.id;

			if (currentLike == 'linux') {
				terminal.classList.add('showTerminal');
				// terminal.classList.remove('showmAndm');
				// terminal.classList.remove('showProg');

				console.log("linux")
				setTimeout(typewriter, 300);
			} else if (currentLike == 'musicMath') {
				// terminal.classList.add('showmAndm');
				// typewriteEffect.innerHTML = '';
			} else if (currentLike == 'programming') {
				// terminal.classList.remove('showTerminal');

			} else {
				console.warn('Error in Transitions');
			}
		});

		let elementExited;
		setExecuteOnExitCallback(()=>{
			elementExited = entryExited.target.id;

			if (elementExited == 'linux') {
				appearTerminalElement.classList.add('hidden')
				terminal.classList.remove('showTerminal');
				typewriteEffect.innerHTML = ''
				i=0
			} else {
				return;
			}
		})
	});

	let startClassAdd = '';
</script>

<section id="likes " class="md:my-20 my-10 w-full">
	<div class="sm:mx-20 mx-5">
		<div class="flex md:justify-center ">
			<div class="flex items-center justify-center flex-col md:flex-row lg:gap-16 md:gap-8 gap-0">
				<div class="flex flex-col h-full pb-10  w-[50%]">
					<div class="left md:sticky fixed top-[25%]">
						<div class="hideTerminal {startClassAdd}  terminal">
							<div class="sm:h-60 h-40  bg-[#343434] rounded-3xl box-border py-5 px-5">
								<div class="text-white source-code-pro sm:text-[24px] text-[18px] flex gap-2">
									<span class="text-[#359006]">~</span>$
									<div bind:this={typewriteEffect} class=""></div>
								</div>
								<div class="appearTerm hidden w-full">
									<div class="source-code-pro-light text-white text-base">
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

				<div class="right flex flex-col min-w-[50%] max-w-[50%]">
					<div class="flex gap-2 sticky top-10 w-full bg-white">
						<span class="text-green-500 no-underline"> ➜</span>
						<p class="text-xl underline">I Like</p>
					</div>
					<div class="flex flex-col gap-52">
						<div class="obsrv" id="linux">
							<h1 class="heading">Linux and Troubleshooting</h1>
							<p class="text-14px md:text-[16px] lg:text-[18px] p-2 font-light max-w-[780px]">
								Playing with the app called Termux, and using Pop!_OS as my daily driver, you can
								expect me to be familliar with linux commands and have sharp troubleshooting skills.
								<span class="text-[16px] italic text-[#9b9b9b]"
									>changing and customizing my desktop, then breaking it, then fixing it, yes that's
									me</span
								>
							</p>
						</div>

						<div class="obsrv" id="musicMath">
							<h1 class="heading">Music and Math</h1>
							<p class="text-14px md:text-[16px] lg:text-[18px] p-2 font-light max-w-[780px]">
								Two things I'm passionate about; Math because it challenges me to think critically
								and find reasons why a problem exists; Music because it brings peace to my mind, and
								helps to improve my creativity.
								<span class="text-[16px] italic text-[#9b9b9b]"
									>i mainly like pop, pop rock like in the early 2000s and classical music</span
								>
							</p>
						</div>
						<div class="obsrv" id="programming">
							<h1 class="heading">
								Designing websites and mobile apps... <br />then bringing them to life
							</h1>
							<p class="text-14px md:text-[16px] lg:text-[18px] p-2 font-light max-w-[780px]">
								This! I love programming since I was 11 but I wasn't consistent then. Programming
								improved my patience and my problem solving skills, made me a better at googling
								things, and overall made my life full of excitement.
								<span class="text-[16px] italic text-[#9b9b9b]"
									>the first time i head of programming, i thought it was related to arranging
									events (program), like wedding, birthdays, etc.</span
								>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

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
		@apply lg:text-4xl md:text-2xl text-xl;
	}
</style>
