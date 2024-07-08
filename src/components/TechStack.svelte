<script>
	import Bar from './Bar.svelte';
	import TechStackItem from './TechStackItem.svelte';
	import {
		setExecuteOnExitCallback,
		setExecuteOnIntersectCallback,
		observeElement,
		entryObserved,
		entryExited,
		disconnectObserver
	} from '$lib/index';
	import { onDestroy, onMount } from 'svelte';


	let elementsToObserve;
	onMount(() => {
		elementsToObserve = document.querySelectorAll('.obsrve');
		elementsToObserve.forEach((element) => observeElement(element))

		setExecuteOnIntersectCallback(() => {
			// console.log("entered!")
		})

		setExecuteOnExitCallback(() => {
			// console.log("exited!")

		})


	});

	onDestroy(() => {
		disconnectObserver()
	})
</script>

<section id="tech-stack" class="my-40 flex justify-center sm:mx-10 mx-5">
	<div class="flex flex-col w-full max-w-[1440px]">
		<h2 class="w-fit sm:text-4xl text-2xl md:leading-normal leading-[1]">
			Tech Stack & Technologies
		</h2>
		<p class="mb-6 w-fit sm:mt-0 mt-2">
			I believe that everyday is a learning day. I make a project and learn these tech stacks along
			the way
		</p>
		<div
			class="grid justify-between lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:flex-row flex-col gap-10 w-fit"
		>
			<div class="flex gap-10 md:flex-row flex-col">
				<div class="tech-stack1-group obsrve flex flex-col gap-5 w-fit">
					<TechStackItem title="Web Development" level="20">
						<img
							src="https://upload.wikimedia.org/wikipedia/en/e/ec/Bun_JS_logo.png"
							alt="bun"
							class="w-[80px] h-auto"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
							alt="svelte"
							class="w-[65px] h-[80px]"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
							alt="tailwind css"
							class="w-[110px] h-[70px]"
						/>
					</TechStackItem>
					<TechStackItem title="Mobile App Development" level="70">
						<img
							src="https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-logomark-320px.png"
							alt="flutter"
							class="w-[60px] h-[80px]"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dart_programming_language_logo_icon.svg/2048px-Dart_programming_language_logo_icon.svg.png"
							alt="dart (programming language)"
							class="w-[80px] h-[80px]"
						/>
					</TechStackItem>
					<TechStackItem title="Design" level="70">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
							alt="figma"
							class="w-[60px] h-[80px]"
						/><img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png"
							alt="canva"
							class="w-[80px] h-[80px]"
						/>
					</TechStackItem>
				</div>
			</div>
			<div class="group3 flex md:items-center items-start flex-col">
				<h3 class="hd">Automation</h3>
				<div class="mt-10">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
						alt="python"
						class="w-[120px] h-[130px]"
					/>
				</div>
			</div>
			<div class="techstack-group2 flex gap-8">
				<div class="tools">
					<h3 class="hd">Tools</h3>
					<div class="container mt-5 flex lg:gap-8 gap-6">
						<div class="container flex flex-col lg:gap-8 gap-6">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Visual_Studio_Code_1.35_icon.png"
								alt="vscode"
								class="w-[80px] h-[80px]"
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_%282023%29.svg/1200px-Android_Studio_Logo_%282023%29.svg.png"
								alt="android studio"
								class="w-[80px] h-[80px]"
							/>
							<img
								src="https://avatars.githubusercontent.com/u/18133?s=280&v=4"
								alt="git"
								class="w-[80px] h-[80px]"
							/>
						</div>
						<div class="container flex flex-col lg:gap-8 gap-6 mt-12">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
								alt="github"
								class="w-[80px] h-[80px]"
							/>
							<img
								src="https://i.redd.it/tu3gt6ysfxq71.png"
								alt="unity"
								class="w-[80px] h-[80px]"
							/>
						</div>
						<div class="container flex mt-24">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/1200px-Godot_icon.svg.png"
								alt="godot"
								class="w-[80px] h-[80px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<style lang="postcss">
	.tech-stack1-group TechStackItem {
		/* animation-name: showAndHide;
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: 1; */

		border-right: 2px solid black;
		}
	@keyframes showAndHide {
		from {
			opacity: 0;
			transform: translateX(-100px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
		/* 100% {
			opacity: 0;
			transform: translateX(-10000px);
		} */
		
	}
</style>