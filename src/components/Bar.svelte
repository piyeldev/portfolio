<script>
	/**
	 * @param 0-100
	 */
	export let progress;
</script>

<div class="back w-[300px] h-[8px] bg-[#e1e1e1] rounded-[10px]">
	<div style="width: {progress}%;" class="fore h-[100%] bg-[#54aeff] rounded-[10px]"></div>
</div>
