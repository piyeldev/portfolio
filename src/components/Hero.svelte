<script>
	import heroBg from '$lib/assets/heroBg.avif';
	import img from '$lib/assets/img.png';
	import GetInTouchBtn from './GetInTouchBtn.svelte';

	
</script>

<section style="background-image: url({heroBg}); background-size: cover;" id="hero" class="relative overflow-x-hidden flex items-center justify-center pt-[60px] sm:pt-[90px]">
	<div class="grid min-h-full ">
		<div
			class="col-start-1 row-start-1 h-full grid lg:px-20 md:px-12 px-4 w-full box-border justify-center"
		>
			<div class="col-start-1 row-start-1 h-full flex justify-center items-end sm:pb-8 pb-4">
				<div
					class=" size-10 bg-[#2B5BA5] flex justify-center items-center rounded-full animate-bounce"
				>
					<i class="fa-solid fa-arrow-down text-white z-10"></i>
				</div>
			</div>
			<div
				class="flex my-10 md:flex-row flex-col justify-center items-center sm:items-center w-fit col-start-1 row-start-1 xl:gap-28 lg:gap-20 gap-6"
			>
				<div class="left-el text-left mx-2 sm:mx-0">
					<h1
						class="header text-white xl:text-[70px] lg:text-[60px] md:text-[50px] text-[40px] leading-8 md:leading-10"
					>
						Hi! I'm Fiel
					</h1>
					<p class="text-white font-light">I'm a student, young, and passionate</p>
					<div class="md:mt-5 mt-0 grid">
						<div
						class="row-start-1 col-start-1 mobile-app font-bold sm:text-[44px] text-[30px] text-white  sm:leading-8 leading-6"
					>
						Mobile App Developer
					</div>
					<div
						class="row-start-1 col-start-1 full-stack font-bold sm:text-[44px] text-[30px] text-white  sm:leading-8 leading-6"
					>
						Full Stack Developer
					</div>
					</div>
					<p class="text-white font-light pb-4">
						- that transforms your ideas into a working magic!
					</p>
					<GetInTouchBtn />
				</div>
				<div class="right-el flex items-center xl:lg:size-90 size-50 md:mx-0 sm:mx-32 mx-2">
					<img src={img} alt="dev" class="drag-none" />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.mobile-app {
		animation-name: mobile-app-anim;
		animation-duration: 5s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		transform-origin: right;
	}
	.full-stack {
		animation-name: full-stack-anim;
		animation-duration: 5s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		transform-origin: left;
	}
	@keyframes mobile-app-anim {
		0% {
			opacity: 0.5;
		}
		30% {
			opacity: 1;
		}
		60% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}


	}

	@keyframes full-stack-anim {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 0;
		}
		60% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
		
	}
</style>