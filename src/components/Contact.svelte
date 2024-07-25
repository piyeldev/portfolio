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
		<div class="socials w-auto flex gap-4 md:justify-start justify-center">
			<a href="https://github.com/piyeldev" target="_blank">
				<div class="social-item">
					<img
						width="35"
						height="35"
						class="bg-white rounded-full"
						src="https://img.icons8.com/ios-glyphs/35/github.png"
						alt="github"
					/>
					
				</div>
			</a>
			<a href="https://www.facebook.com/pyel.franco" target="_blank">
				<div class="social-item">
					<img
						width="35"
						height="35"
						src="https://img.icons8.com/fluency/35/facebook-circled.png"
						alt="facebook-circled"
						class="self-start"
					/>
					
				</div>
			</a>
			<a href="https://www.instagram.com/_pyel_/" target="_blank">
				<div class="social-item">
					<img
						width="35"
						height="35"
						src="https://img.icons8.com/fluency/35/instagram-new.png"
						alt="instagram-new"
					/>
				</div>
			</a>
		</div>
		
		
		<GetInTouchBtn />
	</div>
</section>


<style lang="postcss">
	.social-item {
		@apply flex gap-1 items-center;
	}
</style>