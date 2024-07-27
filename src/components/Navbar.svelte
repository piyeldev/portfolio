<script>
	import fielnobg from '$lib/assets/fiel-nobg.png';
	import Drawer from './drawer.svelte';

	let drawerElement;
	let drawerOnClick = () => {
		drawerElement.classList.toggle('drawerClosed');
		drawerElement.classList.toggle('openDrawer');
	};
</script>

<div class="flex flex-col">
	<div class="bg h-[60px] sm:h-[90px] w-[100%] bg-white bg-opacity-[78%] absolute z-50">
		<div class="md:mx-10 mx-6 flex items-center justify-between h-full">
			<a href="/"
				><img src={fielnobg} alt="logo" class="size-[71px] lg:size-[91px] md:size-[81px]" /></a
			>
			
			<div class="flex lg:gap-12 gap-6 items-center">
				<nav class=" lg:gap-12 gap-6 md:flex flex-row group items-center hidden">
					<a href="/#hero" class="nav-font-size hover:text-[#425E88]">About</a>
					<a href="/#projects" class="nav-font-size hover:text-[#466C81]">Projects</a>
					<a href="/#blog" class="nav-font-size hover:text-[#7C3737]">Blog</a>
					<a href="/contact" class="nav-font-size hover:animate-pulse hover:text-red-400">Contact</a>
				</nav>
				<div class="md:hidden flex justify-center">
					<button on:click={drawerOnClick} class="px-2 rounded-full hover:bg-[#00000034]"
						><i class="fa-solid fa-bars"></i></button
					>
				</div>
				<a href="https://github.com/piyeldev" class=" " target="_blank">
					<i class="fa-brands fa-github md:text-3xl text-2xl animate-enlarge "></i>
				</a>
			</div>
		</div>
	</div>
	<div class="drawer drawerClosed absolute w-full" bind:this={drawerElement}>
		<Drawer />
	</div>
</div>

<style lang="postcss">
	.drawerClosed {
		transition: 300ms transform;
		transform: scaleY(0);
	}
	.openDrawer {
		transform: scaleY(1);
	}
</style>
