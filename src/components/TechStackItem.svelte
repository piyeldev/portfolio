<script>
	import Bar from './Bar.svelte';

	export let title;
	export let level;

	
</script>

	<div class="tech-stack">
		<Bar progress={level} />
		<h3 class="hd">{title}</h3>
		<p class="text-[#8d8d8d] sm:text-[21px] text-18px leading-[10px]">Confidence Level {level}%</p>
		<div class="software mt-3 flex gap-3">
			<slot />
		</div>
	</div>


