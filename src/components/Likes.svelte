<script>
	import fielInPiano from '$lib/assets/fielOnPiano.png?enhanced';
	import fielOnComputer from '$lib/assets/fielOnComputer.jpg?enhanced';
	import fielCodes from '$lib/assets/fielcodes.jpg?enhanced';

</script>

<div class="heartbg absolute -z-10 right-0 translate-y-8 overflow-hidden">
	<svg width="316" height="533" viewBox="0 0 316 533" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M251.407 82.9743C273.432 59.0243 301.754 44.4061 336.188 44.4061C410.312 44.4061 468.625 110.316 468.625 203.067C468.625 258.703 443.462 304.963 396.986 354.868C386.982 365.619 356.41 396.074 355.034 397.515C350.705 401.993 346.039 406.636 341.047 411.424C334.571 417.629 327.995 423.711 321.324 429.666C307.061 442.412 291.831 455.245 276.611 467.547C269.866 473.001 263.071 478.38 256.226 483.684C252.793 486.312 248.698 487.722 244.5 487.722C240.302 487.722 236.207 486.312 232.774 483.684C225.926 478.384 219.127 473.008 212.379 467.558C197.198 455.323 182.293 442.689 167.676 429.666C161.005 423.711 154.429 417.629 147.953 411.424C142.961 406.636 138.295 401.993 133.966 397.515C132.59 396.074 102.018 365.608 92.0135 354.868C45.5483 304.963 20.375 258.714 20.375 203.067C20.375 110.304 78.6883 44.4061 152.812 44.4061C187.246 44.4061 215.568 59.0133 237.593 82.9743C240.068 85.6674 242.371 88.3605 244.5 91.0204C246.639 88.3605 248.932 85.6674 251.407 82.9853V82.9743ZM252.314 431.972C266.958 420.169 281.337 407.982 295.438 395.42C301.743 389.794 307.959 384.049 314.081 378.187C318.696 373.754 322.984 369.487 326.917 365.419C328.822 363.447 359.007 333.357 368.36 323.327C407.795 280.957 427.875 244.074 427.875 203.067C427.875 134.432 387.451 88.7373 336.188 88.7373C313.378 88.7373 295.05 98.1909 280.217 114.327C275.163 119.837 270.687 125.941 266.872 132.525C265.483 134.848 264.228 137.261 263.113 139.751C255.93 157.284 233.059 157.284 225.887 139.751C224.775 137.261 223.523 134.848 222.138 132.525C218.32 125.94 213.84 119.837 208.783 114.327C193.95 98.1909 175.622 88.7373 152.812 88.7373C101.549 88.7373 61.125 134.432 61.125 203.067C61.125 244.074 81.1944 280.957 120.64 323.316C129.982 333.357 160.178 363.447 162.083 365.419C166.016 369.487 170.304 373.754 174.919 378.187C180.686 383.728 186.92 389.491 193.563 395.42C210.164 410.216 227.15 424.493 244.5 438.233C246.986 436.25 249.594 434.166 252.314 431.972Z" fill="#EAEAEA"/>
		</svg>
		
</div>
<div class="likes w-auto flex justify-center lg:my-16 md:my-10 my-6 lg:mx-10 md:mx-6 mx-4 relative">
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
						Playing with the app called Termux, and using <s class="sub">Pop!_OS</s> Arch Linux as my daily driver, you can expect
						me to be familliar with linux commands and have sharp troubleshooting skills.
						<span class="text-[16px] italic text-[#9b9b9b]"
							><s class="text-[16px] italic text-[#9b9b9b]">changing and customizing my desktop, then breaking it, then fixing it,</s> distro hopper? yes that's me. but the hop is over since i use arch btw</span
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
							fiel@computer
						</div>
					</div>
					<div
						id="terminal"
						class="bg-[#343434] w-auto lg:p-5 md:p-3 p-2 obsrv md:h-48 h-32 rounded-md"
					>
						<div class="text-white source-code-pro lg:text-base md:text-sm text-xs flex gap-2">
							<span class="text-[#359006]">~</span>$
							<div class="lg:text-base md:text-sm text-xs w-full">whoami</div>
						</div>
						<div class="appearTerm w-full">
							<div class="source-code-pro-light text-white lg:text-base md:text-sm text-[16px]">
								fiel
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
							<div class="polaroid rotate-12 lg:translate-x-32 translate-x-20 lg:w-40 w-28">
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
							<div class="polaroid lg:-translate-y-14 md:translate-y-20 md:translate-x-0 translate-y-4 lg:-translate-x-4  translate-x-20 lg:w-40 w-28">
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
