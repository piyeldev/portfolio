<script>
	import GetInTouchBtn from './GetInTouchBtn.svelte';
</script>

<section id="contact" class="relative z-10 flex justify-center">
	<div class="w-full flex flex-col items-center py-10 px-4">
		<h1 class="lg:text-[50px] md:text-[40px] text-[30px] text-center lg:leading-normal leading-8">
			Need a developer?
		</h1>
		<p class="text-center">
			Looking forward for a project? Count me in! I'll love to talk about it!
		</p>
		<div class="font-light">
			<i class="fa-solid fa-envelope pr-2 text-[#344E5C] md:text-xl text-xs"></i><a
				class="md:text-base text-[16px]"
				href="mailto:frankthecrafter23@gmail.com">frankthecrafter23@gmail.com</a
			>
		</div>
		
		
		
		<GetInTouchBtn />
	</div>
</section>


<style lang="postcss">
	.social-item {
		@apply flex gap-1 items-center;
	}
</style>