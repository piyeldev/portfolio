<script>
	import fielnobg from '$lib/assets/fiel-nobg.png';
	import fiel from '$lib/assets/fiel.png';
</script>

<section id="footer" class="w-full">
	<div
		class="flex justify-between md:flex-row flex-col lg:pl-10 lg:pr-20 md:px-6 px-4 bg-[#484975] pb-12 text-white"
	>
		<div class="bio">
			<div class="headimg grid">
				<div class="col-start-1 row-start-1 bg-white w-96 h-80 rounded-full -ml-32 -mt-52"></div>
				<div class="col-start-1 row-start-1">
					<img src={fielnobg} alt="" class="w-[140px] h-[140px] ml-10" />
				</div>
			</div>

			<div class="flex justify-center">
				<div class="w-fit">
					<div class=" mt-5 flex md:justify-start justify-center items-center">
						<img src={fiel} alt="fiel" class="md:size-28 size-24" />
						<p class=" font-light text-[16px] ml-2 w-48">
							I’m a high school student based in Cebu, Philippines, and a web/mobile developer with
							a passion of creating beautiful designs that will enhance user experience. I’m on my
							way to be the best of myself and to bring innovative ideas to life.
						</p>
					</div>
					<div class=" socials flex md:hidden mx-8 mt-4">
						<div class="h-fit">
							<h3 class="text-2xl">Follow me!</h3>
							<div class="flex flex-col mt-4 gap-8">
								<div class="flex items-center gap-3">
									<div class="rounded-full bg-white p-1">
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
											alt="github"
											class="w-[35px] h-[35px]"
										/>
									</div>
									<p class="underline text-xs">piyeldev</p>
								</div>
								<div class="flex items-center gap-3">
									<div class="rounded-full bg-white p-1">
										<img
											src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png"
											alt="fb"
											class="w-[35px] h-[35px]"
										/>
									</div>
									<p class="underline text-xs">Fiel Franco Degamo</p>
								</div>
								<div class="flex items-center gap-3">
									<div class="rounded-full bg-white p-1">
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
											alt="ig"
											class="w-[35px] h-[35px]"
										/>
									</div>
									<p class=" text-xs">_pyel_</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class=" socials md:flex hidden md:max-w-fit max-w-[400px] lg:items-start items-end mr-4 mt-6 md:ml-4 ml-2"
		>
			<div class="h-fit">
				<h3 class="text-2xl">Follow me!</h3>
				<div class="flex flex-col mt-4 gap-8">
					<div class="flex items-center gap-3">
						<div class="rounded-full bg-white p-1">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
								alt="github"
								class="w-[35px] h-[35px]"
							/>
						</div>
						<p class="underline text-xs">piyeldev</p>
					</div>
					<div class="flex items-center gap-3">
						<div class="rounded-full bg-white p-1">
							<img
								src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png"
								alt="fb"
								class="w-[35px] h-[35px]"
							/>
						</div>
						<p class="underline text-xs">Fiel Franco Degamo</p>
					</div>
					<div class="flex items-center gap-3">
						<div class="rounded-full bg-white p-1">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
								alt="ig"
								class="w-[35px] h-[35px]"
							/>
						</div>
						<p class=" text-xs">_pyel_</p>
					</div>
				</div>
			</div>
		</div>
		<div class="links lg:flex flex-col hidden gap-6 mb-4 mt-6 lg:ml-4 ml-2">
			<div class="about w-32">
				<a href="#hero"><h3 class="underline text-lg mb-2">About</h3></a>
				<p class="font-light text-xs">Learn about Fiel's skills and tech stack.</p>
			</div>
			<div class="projects w-32">
				<a href="#projects"><h3 class="underline text-lg mb-2">Projects</h3></a>
				<p class="font-light text-xs">View Fiel's previous works.</p>
			</div>
			<div class="blog w-32">
				<a href="#blog"><h3 class="underline text-lg mb-2">Blog</h3></a>
				<p class="font-light text-xs">
					Read his articles about programming, tutorials, and hobbies.
				</p>
			</div>
		</div>
	</div>
	<div
		class="copyright flex md:flex-row flex-col px-4 py-3 text-center justify-center items-center bg-gray-600 text-white"
	>
		<p class="text-[16px] md:text-right text-center">
			Copyright © 2024 <span class="underline text-[16px]">Fiel Franco Degamo</span>
		</p>

		<div
			class="ml-4 font-light text-[12px] max-w-96 opacity-75 disclaimer md:text-left text-center"
		>
			All trademarks, logos, and brand names are the property of their respective owners. All
			company, product, and service names used in this website are for identification purposes only.
			Use of these names, trademarks, and brands does not imply endorsement.
		</div>
	</div>
</section>
