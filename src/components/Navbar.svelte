<script>
	import fielnobg from '$lib/assets/fiel-nobg.png';
</script>

<div class="bg h-[60px] sm:h-[90px] w-[100%] bg-white bg-opacity-[78%] absolute z-50">
	<div class="md:mx-10 mx-6 flex items-center justify-between h-full">
		<a href="/"
			><img src={fielnobg} alt="logo" class="size-[71px] lg:size-[91px] md:size-[81px]" /></a
		>
		<nav class=" lg:gap-12 gap-6 md:flex flex-row group items-center hidden">
			<a href="#hero" class="nav-font-size hover:text-[#425E88]">About</a>
			<a href="#projects" class="nav-font-size hover:text-[#466C81]">Projects</a>
			<a href="#blog" class="nav-font-size hover:text-[#7C3737]">Blog</a>
			<a href="#contact" class="nav-font-size hover:animate-pulse hover:text-red-400">Contact</a>
			<a href="https://github.com/piyeldev" class="">
				<i class="fa-brands fa-github text-3xl animate-enlarge"></i>
			</a>
		</nav>
		<div class="md:hidden flex justify-center">
			<a href="/" class="px-2 rounded-full hover:bg-[#00000034]"><i class="fa-solid fa-bars"></i></a
			>
		</div>
	</div>
</div>
