<script>
	import ProjectCard from './ProjectCard.svelte';
	import image18 from '$lib/assets/image18.png?enhanced';
	import calculatorImg from '$lib/assets/calculator.png?enhanced'
</script>

<section id="projects" class="bg-[#466C81] text-white">
	<div class="flex justify-center">
		<div class="flex flex-col w-full lg:gap-8 gap-4 pt-4 pb-10 max-w-[1440px]">
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
			<div class="flex overflow-x-scroll gap-4 md:p-4 p-2 lg:ml-10 md:ml-6 ml-4">
				<ProjectCard
					image={image18}
					title="Website Portfolio"
					repo="https://github.com/piyeldev/portfolio"
					link="/"
					prog={Number(2)}
					desc="A website showcasing my skills, projects, and blog."
					><a href="#tech-stack">
						<div class="technologies text-[14px] underline">
							My Web Development Stack <i class="fa-solid fa-arrow-up-right-from-square text-[14px]"
							></i>
						</div>
					</a></ProjectCard
				>
				<ProjectCard
					image={calculatorImg}
					title="Calculator"
					repo="https://github.com/piyeldev/calculator"
					link="https://piyeldev.github.io/calculator"
					prog={Number(1)}
					desc="A collection of calculators for math nerds and students"
					bg="#a9c9f9"
					bgTitle="#1f324f"
					>
					<div class="flex gap-2">
						<img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
						<img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
						<img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
						<img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap--v2"/>
					</div>
					</ProjectCard
				>
			</div>
			<div class="guide lg:hidden flex text-[16px] mx-4">Swipe to see more projects, tap to see detailed information, tap the buttons for links</div>
		</div>
	</div>
</section>

