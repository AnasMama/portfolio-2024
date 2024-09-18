<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { view } from '$lib/function';

	const animationSteps = {
        line1: false,
        line2: false
    }

	onMount(() => {
		setTimeout(() => {
			animationSteps.line1 = true;
		}, 0);
        setTimeout(() => {
            animationSteps.line2 = true;
        }, 150);
	});
</script>

<a href="/projects" class="group/works relative h-full w-full flex">
	<div
		class="h-px bg-base-light absolute top-0 left-0 right-0 transition-all duration-300 {animationSteps.line1
			? 'w-full'
			: 'w-0'}"
	/>

	<div class="w-full flex justify-between items-center gap-4 px-6">
		<p class="text-3xl font-normal" style={view('projects-title')}>{$_('homepage.my-works')}</p>
		<Icon
			name="arrow"
			width="2rem"
			height="2rem"
			class="group-hover/works:translate-x-2 group-hover/works:-translate-y-2 transition-all duration-300"
		/>
	</div>
	<div
		class="h-px bg-base-light absolute bottom-0 left-0 right-0 transition-all duration-300 group-hover/works:w-4/5 {animationSteps.line2
			? 'w-full'
			: 'w-0'}"
	/>
</a>
