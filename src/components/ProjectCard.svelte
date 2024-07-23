<script>
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

	let imageLink;
	onMount(() => {
		backgroundColorOfTitle = bgTitle;
		backgroundColor = bg;

		console.log(image)
	})
</script>

<div style="background-color: {backgroundColor};"
	class="flex-shrink-0 hover:scale-105 duration-200 w-fit h-auto md:px-5 px-3 md:pt-6 md:pb-6 py-3 rounded-2xl card-shadow flex flex-col"
>
	<div class="flex justify-center align-bottom">
		<div class="grid">
			<div class="col-start-1 row-start-1">
				<enhanced:img src="{image}" alt="headerIMG" class="rounded-xl md:max-w-72 max-w-38 h-auto" ></enhanced:img>

			</div>
			<div class="row-start-1 col-start-1 flex items-end -mb-4">
				<h3 style="background-color: {backgroundColorOfTitle};"
					class="md:text-base text-[16px] ml-2 md:px-3 px-2 md:py-2 py-1 text-white rounded-xl title-shadow w-fit h-fit"
				>
					{title}
				</h3>
			</div>
		</div>
	</div>

	<div class=" flex md:flex-row flex-col mt-6">
		<div class=" md:ml-3 ml-1 md:w-40">
			<p class="text-white md:text-[18px] text-[16px]">{desc}</p>
			{#if prog === 0}
				<div class="h-5"></div>
			{:else if prog === 1}
				<p class="text-[#ffffffc9] text-[14px]">(Delayed &gt;~&lt;)</p>
			{:else}
				<p class="text-[#ffffffc9] text-[14px]">(In progress...)</p>
			{/if}
		</div>
		<div class="md:flex hidden gap-4 ml-4 self-end">
			<a target="_blank" href={link}><i class=" fa-solid fa-globe mt-8 text-white text-2xl"></i></a>
			<a target="_blank" href={repo}><i class="fa-solid fa-code text-white text-2xl"></i></a>
		</div>
	</div>
	<div class="h-full flex items-end">
		<div class="flex flex-col">
			<h3
			class="md:inline-block hidden text-white md:mt-0 mt-2 text-sm md:text-base md:ml-3 leading-4 md:leading-normal"
		>
			Tech Stack Used:
			<slot />
		</h3>
		</div>
		<div class="md:hidden flex gap-4 justify-end mr-2">
			<a target="_blank" href={link}><i class=" fa-solid fa-globe text-white text-base"></i></a>
			<a target="_blank" href={repo}><i class="fa-solid fa-code text-white text-base"></i></a>
		</div>
	</div>
</div>
