<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/components/Icon.svelte';
	import LinkItem from '$lib/components/LinkItem.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let animationSteps = {
		picture: false,
		title: false,
		line_1: false,
		line_2: false,
		line_3: false,
		icon_1: false,
		icon_2: false,
		icon_3: false
	};

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
			animationSteps.icon_1 = true;
		}, 750);
		setTimeout(() => {
			animationSteps.icon_2 = true;
		}, 900);
		setTimeout(() => {
			animationSteps.icon_3 = true;
		}, 1050);
	});
</script>

<a href="/projects" class="group/works h-full w-full row-span-3 grid grid-rows-3">
	{#if animationSteps.title}
		<div class="row-span-1 h-full flex justify-between items-center gap-4 py-6 px-6" in:fade>
			<p class="text-5xl font-normal">{$_('homepage.my-works')}</p>
			<Icon
				name="arrow"
				width="2rem"
				height="2rem"
				class="group-hover/works:translate-x-2 group-hover/works:-translate-y-2 transition-all duration-300"
			/>
		</div>
	{/if}
	{#if animationSteps.picture}
		<div
			class="row-span-2 row-start-2 h-full rounded bg-base-light overflow-hidden group-hover/works:translate-x-2 transition-all duration-300"
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
	{#if animationSteps.line_1}
		<LinkItem href="#" label="Svelte" />
	{/if}
	{#if animationSteps.line_2}
		<LinkItem href="#" label="Tailwind" />
	{/if}
	{#if animationSteps.line_3}
		<LinkItem href="#" label="Vite" />
	{/if}
	<div class="row-start-4 w-full grid grid-cols-5 items-center gap-16">
		{#if animationSteps.icon_1}
			<a
				href="https://www.linkedin.com/in/anasmama/"
				target="_blank"
				rel="noopener"
				class="col-start-2 hover:scale-[1.2] transition-all duration-300"
				in:fade
			>
				<Icon name="linkedin" width="2rem" height="2rem" />
			</a>
		{/if}
		{#if animationSteps.icon_2}
			<a
				href="https://www.linkedin.com/in/anasmama/"
				target="_blank"
				rel="noopener"
				class="hover:scale-[1.2] transition-all duration-300"
				in:fade
			>
				<Icon name="github" width="2rem" height="2rem" />
			</a>
		{/if}
		{#if animationSteps.icon_3}
			<a
				href="mailto:anas.mama.am@gmail.com"
				class="hover:scale-[1.2] transition-all duration-300"
				in:fade
			>
				<Icon name="mail" width="2rem" height="2rem" />
			</a>
		{/if}
	</div>
</div>
