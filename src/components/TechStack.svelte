<script>
	import Bar from './Bar.svelte';
	import TechStackItem from './TechStackItem.svelte';
	
</script>

<div class="stack-bg absolute left-0 -z-10 -translate-y-32 overflow-hidden w-full ">
	<svg width="684" height="1283" viewBox="0 0 684 1283" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M-223.997 790.141C-224.039 791.964 -223.595 793.765 -222.71 795.358C-221.825 796.952 -220.531 798.28 -218.963 799.208L132.012 1006.62C133.632 1007.58 135.484 1008.07 137.366 1008.05C139.249 1008.03 141.087 1007.48 142.682 1006.48L473.136 799.067C474.641 798.122 475.875 796.803 476.717 795.237C477.559 793.672 477.981 791.915 477.94 790.138C477.9 788.361 477.399 786.625 476.487 785.099C475.574 783.574 474.282 782.312 472.735 781.436L364.015 719.949L473.136 651.457C474.641 650.512 475.875 649.192 476.717 647.627C477.559 646.062 477.981 644.305 477.94 642.527C477.9 640.75 477.399 639.014 476.487 637.489C475.574 635.963 474.282 634.701 472.735 633.826L364.017 572.339L473.137 503.847C474.642 502.902 475.876 501.583 476.718 500.017C477.561 498.452 477.982 496.695 477.942 494.917C477.901 493.14 477.4 491.404 476.488 489.878C475.575 488.353 474.283 487.091 472.736 486.215L142.282 299.328C140.78 298.479 139.088 298.023 137.363 298.001C135.638 297.979 133.936 298.392 132.413 299.203L-218.562 486.09C-220.17 486.947 -221.521 488.216 -222.476 489.768C-223.431 491.32 -223.956 493.099 -223.997 494.921C-224.038 496.743 -223.593 498.543 -222.708 500.137C-221.823 501.73 -220.53 503.059 -218.962 503.987L-103.316 572.332L-218.561 633.7C-220.17 634.557 -221.521 635.826 -222.476 637.378C-223.431 638.93 -223.956 640.709 -223.997 642.531C-224.038 644.353 -223.593 646.153 -222.708 647.747C-221.823 649.34 -220.53 650.669 -218.962 651.597L-103.312 719.942L-218.562 781.311C-220.17 782.167 -221.522 783.436 -222.477 784.988C-223.433 786.54 -223.957 788.319 -223.997 790.141ZM137.082 319.972L447.652 495.613L137.071 690.553L-192.781 495.618L137.082 319.972ZM-82.6174 584.565L132.012 711.407C133.632 712.366 135.484 712.859 137.366 712.835C139.249 712.81 141.087 712.268 142.682 711.267L344.253 584.745L447.652 643.223L137.072 838.159L-192.781 643.228L-82.6174 584.565ZM-82.6136 732.176L132.012 859.012C133.632 859.971 135.484 860.465 137.367 860.44C139.249 860.415 141.088 859.873 142.682 858.872L344.251 732.354L447.652 790.833L137.072 985.769L-192.781 790.838L-82.6136 732.176Z" fill="#EAEAEA"/>
		</svg>
		
</div>
<section id="tech-stack" class="my-40 flex justify-center sm:mx-10 mx-5">
	<div class="flex flex-col w-full max-w-[1440px]">
		<h2 class="w-fit sm:text-4xl text-2xl md:leading-normal leading-[1]">
			Tech Stack & Technologies
		</h2>
		<p class="mb-6 w-fit sm:mt-0 mt-2">
			I believe that everyday is a learning day. I make a project and learn these tech stacks along
			the way
		</p>
		<div
			class="grid justify-between lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:flex-row flex-col gap-10 w-fit"
		>
			<div class="flex gap-10 md:flex-row flex-col">
				<div class="tech-stack1-group obsrve flex flex-col gap-5 w-fit">
					<TechStackItem title="Web Development" level="20">
						<img
							src="https://upload.wikimedia.org/wikipedia/en/e/ec/Bun_JS_logo.png"
							alt="bun"
							class="w-[80px] h-auto"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
							alt="svelte"
							class="w-[65px] h-[80px]"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
							alt="tailwind css"
							class="w-[110px] h-[70px]"
						/>
					</TechStackItem>
					<TechStackItem title="Mobile App Development" level="70">
						<img
							src="https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-logomark-320px.png"
							alt="flutter"
							class="w-[60px] h-[80px]"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dart_programming_language_logo_icon.svg/2048px-Dart_programming_language_logo_icon.svg.png"
							alt="dart (programming language)"
							class="w-[80px] h-[80px]"
						/>
					</TechStackItem>
					<TechStackItem title="Design" level="70">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
							alt="figma"
							class="w-[60px] h-[80px]"
						/><img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png"
							alt="canva"
							class="w-[80px] h-[80px]"
						/>
					</TechStackItem>
				</div>
			</div>
			<div class="group3 flex md:items-center items-start flex-col">
				<h3 class="hd">Automation</h3>
				<div class="mt-10">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
						alt="python"
						class="w-[120px] h-[130px]"
					/>
				</div>
			</div>
			<div class="techstack-group2 flex gap-8">
				<div class="tools">
					<h3 class="hd">Tools</h3>
					<div class="container mt-5 flex lg:gap-8 gap-6">
						<div class="container flex flex-col lg:gap-8 gap-6">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Visual_Studio_Code_1.35_icon.png"
								alt="vscode"
								class="w-[80px] h-[80px]"
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_%282023%29.svg/1200px-Android_Studio_Logo_%282023%29.svg.png"
								alt="android studio"
								class="w-[80px] h-[80px]"
							/>
							<img
								src="https://avatars.githubusercontent.com/u/18133?s=280&v=4"
								alt="git"
								class="w-[80px] h-[80px]"
							/>
						</div>
						<div class="container flex flex-col lg:gap-8 gap-6 mt-12">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
								alt="github"
								class="w-[80px] h-[80px]"
							/>
							<img
								src="https://i.redd.it/tu3gt6ysfxq71.png"
								alt="unity"
								class="w-[80px] h-[80px]"
							/>
						</div>
						<div class="container flex mt-24">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/1200px-Godot_icon.svg.png"
								alt="godot"
								class="w-[80px] h-[80px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


