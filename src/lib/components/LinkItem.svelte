<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import { onMount } from 'svelte';
	import { view } from '$lib/function';

	export let label: string;
	export let slug: string;

	let isLine = false;

	const href = `/projects#${slug}`;

	onMount(() => {
		setTimeout(() => {
			isLine = true;
		}, 0);
	});
</script>

<a
	{href}
	class="group/link relative w-full text-xl flex items-center overflow-hidden py-4 px-6 lg:h-18 lg:text-3xl"
>
	<div
		class="relative h-full w-full flex items-center overflow-hidden"
		in:fly={{ x: 100, duration: 500 }}
	>
		<span
			class="absolute translate-x-0 transition-all duration-300"
			style={view(`projects-title-${slug}`)}
		>
			{label}
		</span>
	</div>
	<Icon name="arrow" class="rotate-45 group-hover/link:translate-x-2 transition-all duration-300" />
	<div
		class="h-px w-0 bg-base-light absolute bottom-0 left-0 right-0 transition-all duration-300 group-hover/link:w-4/5"
		class:w-full={isLine}
		style={view(`projects-title-${slug}-underline`)}
	/>
</a>
