<script>
	/**
	 * @param 0-100
	 */
	const { progress, } = $props()
</script>

<div class="back  h-[8px] bg-[#e1e1e1] rounded-[10px] w-full">
	<div style="width: {progress}%;" class="fore h-[100%] bg-[#54aeff] rounded-[10px]"></div>
</div>
