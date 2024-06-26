<script>
	import ProjectCard from './ProjectCard.svelte';
	import image18 from '$lib/assets/image18.png';
</script>

<section id="projects">
	<div class="bg-[#466C81] flex justify-center">
		<div class="front max-w-[1440px] flex flex-col lg:gap-8 gap-4 pt-4 pb-10">
			<div
				class="top-elements w-full flex md:items-center md:gap-6 md:flex-row flex-col lg:px-10 md:px-6 px-4"
			>
				<h2
					class="text-white py-3 px-8 bg-[#344E5C] lg:text-4xl md:text-2xl text-xl w-fit rounded-[20px] title-card-shadow"
				>
					Projects
				</h2>
				<p class="lg:text-[18px] text-[16px] leading-[22px] text-white px-2 py-3 rounded-xl">
					With the power of Google search, ChatGPT, and StackOverflow, Reading the docs, I am able
					to make several projects that led to improving my confidence level on the tech stacks
					mentioned above.
				</p>
			</div>
			<div class="list-projects flex overflow-x-auto md:p-4 p-2 lg:ml-10 md:ml-6 ml-4">
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
		</div>
	</div>
</section>
