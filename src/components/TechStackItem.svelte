<script>
	import Bar from './Bar.svelte';

	const {
		title,
		level,
		children
	} = $props()
	
</script>

	<div class="tech-stackgio">
		<Bar progress={level} />
		<h3 class="hd">{title}</h3>
		<p class="text-[#8d8d8d] sm:text-[21px] text-18px leading-[10px]">Confidence Level {level}%</p>
		<div class="software mt-3 flex gap-3">
			{@render children?.()}
		</div>
	</div>


