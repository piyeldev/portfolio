<script>
	import image18 from '$lib/assets/image18.png';
	import { onMount } from 'svelte';

	export let image;
	export let title;
	export let desc;
	export let prog;
	export let repo;
	export let link;

	export let bg = "#F6B5A8";
	export let bgTitle = "#4D1E1E";


	let backgroundColorOfTitle;
	let backgroundColor;
	onMount(() => {
		backgroundColorOfTitle = bgTitle;
		backgroundColor = bg;
	})
</script>

<div style="background-color: {backgroundColor};"
	class="flex-shrink-0 hover:scale-105 duration-200 min-w-72 card md:px-5 px-4 md:pt-6 pt-4 md:pb-6 pb-4 rounded-2xl card-shadow flex flex-col"
>
	<div class="flex justify-center align-bottom">
		<div class="grid">
			<img src={image} alt="headerIMG" class="w-fit h-full row-start-1 col-start-1" >
			<div class="row-start-1 col-start-1 flex items-end -mb-4">
				<h3 style="background-color: {backgroundColorOfTitle};"
					class="md:text-base text-xs ml-2 px-3 py-2 text-white rounded-xl title-shadow w-fit h-fit"
				>
					{title}
				</h3>
			</div>
		</div>
	</div>

	<div class=" flex md:flex-row flex-col mt-6">
		<div class=" md:ml-3 ml-1 md:w-40">
			<p class="text-white md:text-[18px] text-xs">{desc}</p>
			{#if prog === 0}
				<div class="h-5"></div>
			{:else if prog === 1}
				<p class="text-[#ffffffc9] text-[14px]">(Delayed &gt;~&lt;)</p>
			{:else}
				<p class="text-[#ffffffc9] text-[14px]">(In progress...)</p>
			{/if}
		</div>
		<div class="md:flex hidden gap-4 ml-4">
			<a target="_blank" href={link}><i class=" fa-solid fa-globe mt-8 text-white text-2xl"></i></a>
			<a target="_blank" href={repo}><i class="fa-solid fa-code text-white text-2xl"></i></a>
		</div>
	</div>
	<div class="flex flex-col">
		<h3
			class="md:inline-block hidden text-white md:mt-0 mt-2 text-sm md:text-base md:ml-3 leading-4 md:leading-normal"
		>
			Tech Stack Used:
			<slot />
		</h3>
		<div class="md:hidden flex gap-4 justify-end mr-2">
			<a target="_blank" href={link}><i class=" fa-solid fa-globe text-white text-2xl"></i></a>
			<a target="_blank" href={repo}><i class="fa-solid fa-code text-white text-2xl"></i></a>
		</div>
	</div>
</div>
