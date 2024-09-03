<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from './Icon.svelte';

	export let href = '#';
	export let label: string;
</script>

<a
	{href}
	class="group/link relative w-full h-18 border-b border-base-light text-3xl flex items-center overflow-hidden py-2 px-6"
	
>
	<div class="relative h-full w-full flex items-center overflow-hidden" in:fly={{ x: 100, duration: 500 }}>
		<span
			class="absolute transition-all duration-300 group-hover/link:-translate-y-full group-hover/link:r group-hover/link:opacity-0 group-hover/link:rotate"
		>
			{label}
		</span>
		<span
			class="absolute transition-all font-medium duration-300 translate-y-full opacity-0 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:rotate-0"
		>
			{label}
		</span>
	</div>
	<Icon
		name="arrow"
		width="2rem"
		height="2rem"
		class="rotate-45 group-hover/link:translate-x-2 transition-all duration-300"
	/>
</a>
