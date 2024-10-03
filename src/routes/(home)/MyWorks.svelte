<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/components/Icon.svelte';
	import LinkItem from '$lib/components/LinkItem.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import { view } from '$lib/function';
	import { projects } from '$lib/store';

	let animationSteps = {
		picture: false,
		title: false,
		line_1: false,
		line_2: false,
		line_3: false,
		icons: false
	};

	$: [project1, project2, project3] = $projects.slice(0, 3);

	onMount(() => {
		setTimeout(() => {
			animationSteps.picture = true;
		}, 0);
		setTimeout(() => {
			animationSteps.title = true;
		}, 300);
		setTimeout(() => {
			animationSteps.line_1 = true;
		}, 300);
		setTimeout(() => {
			animationSteps.line_2 = true;
		}, 450);
		setTimeout(() => {
			animationSteps.line_3 = true;
		}, 600);
		setTimeout(() => {
			animationSteps.icons = true;
		}, 750);
	});
</script>

<a href="/projects" class="group/works w-full lg:row-span-3 lg:grid lg:grid-rows-3">
	{#if animationSteps.title}
		<div class="row-span-1 flex justify-between items-center gap-4 px-6 py-6" in:fade>
			<p class="text-3xl font-normal lg:text-5xl" style={view('projects-title')}>{$_('homepage.my-works')}</p>
			<Icon
				name="arrow"
				class="group-hover/works:translate-x-2 group-hover/works:-translate-y-2 transition-all duration-300"
			/>
		</div>
	{/if}
	{#if animationSteps.picture}
		<div
			class="hidden row-span-2 row-start-2 h-full rounded bg-base-light overflow-hidden group-hover/works:translate-x-2 transition-all duration-300 lg:flex"
			in:fly={{ x: 100, duration: 500 }}
		>
			<img
				src="/my-works.webp"
				alt="hero"
				class="object-cover w-full h-full transition-all duration-300"
			/>
		</div>
	{/if}
</a>
<div class="grid grid-rows-4 row-span-3">
	{#if animationSteps.line_1 && project1}
		{@const { title, slug } = project1}
		<LinkItem {slug} label={title} />
	{/if}
	{#if animationSteps.line_2}
		{@const { title, slug } = project2}
		<LinkItem {slug} label={title} />
	{/if}
	{#if animationSteps.line_3}
		{@const { title, slug } = project3}
		<LinkItem {slug} label={title} />
	{/if}
	<div class="row-start-4 w-full items-center gap-16 grid grid-cols-5 py-8">
		{#if animationSteps.icons}
			<SocialLinks />
		{/if}
	</div>
</div>
