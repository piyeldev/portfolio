<script>
	import fielwhite from '$lib/assets/fiel-white.png?enhanced';
	import fiel from '$lib/assets/fiel.png';
</script>

<section id="footer" class="overflow-hidden">
	<div
		class="flex lg:justify-start lg:items-start md:gap-6 gap-0  md:flex-row flex-col lg:pl-10 lg:pr-20 md:px-6 px-4 bg-[#484975] pb-8 text-white"
	>
		<div>
			<div class="headimg">
				<enhanced:img src={fielwhite} alt="fiel logo" class="w-[100px] h-auto m-5" ></enhanced:img>
			</div>
			<div class="flex flex-col gap-3">
				<p class="footerSubs">
					This website is Fiel's showcase of skills and projects.
				</p>
				<div class="flex gap-2 items-center">
					<i class="fa-brands fa-github  moreFiel"></i>
					<p class="footerSubs ">View source code on github</p>
				</div>
				<div class="flex gap-2 items-center">
					<i class="fa-solid fa-newspaper  moreFiel"></i>
					<p class="footerSubs">View latest tutorials from fiel</p>
				</div>
			</div>
		</div>md:text-[18px] text-[16px]

		<div class="footer-nav-item flex flex-col gap-6 mb-4 mt-6 lg:ml-4 ml-0">
			<div class="about max-w-56">
				<a href="/#hero"><h3 class="heading">About</h3></a>
				<p class="sub">Learn about Fiel's skills and tech stack.</p>
			</div>
			<div class="projects max-w-56">
				<a href="/#projects"><h3 class="heading">Projects</h3></a>
				<p class="sub">View Fiel's previous works.</p>
			</div>
			<div class="blog max-w-56">
				<a href="/#blog"><h3 class="heading">Blog</h3></a>
				<p class="sub bg-[#484975]">Read his articles about programming, tutorials, and hobbies.</p>
			</div>
		</div>
		<div class="creditsAndDisclaimer flex gap-2 flex-col footerSubs md:max-w-[40%]  mt-6">
			<div class="disclaimer text-[12px]">
				All trademarks, logos, and brand names are the property of their respective owners. All
			company, product, and service names used in this website are for identification purposes only.
			Use of these names, trademarks, and brands does not imply endorsement.
			</div>
			<div class="credits  flex flex-col gap-2">
				<a href="https://icons8.com" class="text-[12px]"><u class="text-[12px]">Icons (some)</u>  by Icons8</a>
				<a href="https://fontawesome.com" class="text-[12px]"><u class="text-[12px]">Icons (some)</u>  by FontAwesome</a>
				<a href="https://fonts.google.com" class="text-[12px]"><u class="text-[12px]">Fonts</u> from Google Fonts</a>
			</div>
		</div>
	</div>
	<div
		class="copyright flex md:flex-row flex-col px-4 py-3 text-center justify-center items-center bg-gray-600 text-white"
	>
		<p class="text-[16px] md:text-right text-center">
			Copyright © 2024 <span class="underline text-[16px]">Fiel Franco Degamo</span>
		</p>

		
	</div>
</section>

<style lang="postcss">
	.footer-nav-item .heading {
		@apply text-base;
	}

	.footer-nav-item .sub, .footerSubs {
		@apply font-light text-[14px] text-[#b5b6e4];
	}

	.moreFiel {
		@apply text-[#9ca3af] transition-all duration-300 hover:text-white;
	}
</style>
