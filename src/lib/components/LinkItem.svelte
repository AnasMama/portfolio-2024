<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import { onMount } from 'svelte';

	export let href = '#';
	export let label: string;

	let isLine = false;

	onMount(() => {
		setTimeout(() => {
			isLine = true;
		}, 0);
	});
</script>

<a
	{href}
	class="group/link relative w-full h-18 text-3xl flex items-center overflow-hidden py-2 px-6"
	
>
	<div class="relative h-full w-full flex items-center overflow-hidden" in:fly={{ x: 100, duration: 500 }}>
		<span
			class="absolute translate-x-0 transition-all duration-300"
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
	<div class="h-px w-0 bg-base-light absolute bottom-0 left-0 right-0 transition-all duration-300 group-hover/link:w-4/5 {isLine ? "w-full" : ""}" />
</a>
