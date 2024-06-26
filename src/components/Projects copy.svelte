<script>
	import ProjectCard from './ProjectCard.svelte';
	import image18 from '$lib/assets/image18.png';
</script>

<section id="projects">
	<div class="flex bg-gradient-to-t to-white to-[92.1%] from-[#466C81] from-[92.1%]">
		<div class=" grid justify-center lg:mx-14 md:mx-8 mx-4 max-w-[1440px]">
			<div class=" pt-16 pb-10 flex gap-8">
				<ProjectCard
					image={image18}
					title="Website Portfolio"
					repo="https://github.com/piyeldev"
					link="/"
					prog={Number(1)}
					desc="A website showcasing my skills, projects, and blog."
					><a href="#tech-stack">
						<div class="technologies text-[14px] underline">
							My Web Development Stack <i class="fa-solid fa-arrow-up-right-from-square text-[14px]"
							></i>
						</div>
					</a></ProjectCard
				>
			</div>
			<div class="col-start-1 row-start-1 flex h-fit">
				<div class="flex lg:gap-10 md:gap-6 gap-4 items-start">
					<div class="w-fit h-fit">
						<h2 class="text-white py-3 px-8 bg-[#344E5C] w-fit rounded-[20px] title-card-shadow">
							Projects
						</h2>
					</div>
					<div class="sub lg:mt-[1.30rem] mt-2 h-fit w-full">
						<p class="text-[18px] leading-[22px]">
							With the power of Google search, ChatGPT, and StackOverflow, Reading the docs,
						</p>
						<p class="text-[18px] leading-[22px] text-white">
							I am able to make several projects that led to improving my confidence level on the
							tech stacks mentioned above.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
