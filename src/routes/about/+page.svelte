<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { _ } from 'svelte-i18n';
	import { view } from '$lib/function';
	import Motif from '$lib/components/Motif.svelte';
	import WorkExperiences from './WorkExperiences.svelte';
	import Information from './Information.svelte';
	import MyWorks from './MyWorks.svelte';

	let animationSteps = {
		experiences: false,
		myWorks: false,
		motifs: false,
		icons: false
	};

	onMount(() => {
		setTimeout(() => {
			animationSteps.experiences = true;
		}, 300);
		setTimeout(() => {
			animationSteps.myWorks = true;
		}, 450);
		setTimeout(() => {
			animationSteps.motifs = true;
		}, 450);
		setTimeout(() => {
			animationSteps.icons = true;
		}, 600);
	});
</script>

<svelte:head>
	<title>{$_('navigation.about')} | Anas MAMA</title>
	<meta name="title" content="{$_('navigation.about')} | Anas MAMA" />
	<meta name="description" content={$_('about.meta.description')} />
	<meta name="keywords" content={$_('about.meta.keywords')} />
	<meta name="author" content="Anas MAMA" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="w-full max-w-screen-2xl grid gap-2 mx-auto overflow-clip md:grid-cols-2 lg:h-[800px] lg:grid-cols-3">
	<figure class="h-64 w-full row-span-2 md:h-full lg:hidden">
		<img
			src="/profil-2024.webp"
			width="400"
			height="450"
			alt="profile"
			class="object-cover w-full h-full"
			style={view('about-picture')}
		/>
	</figure>
	<article class="flex flex-col justify-start">
		<div class="group/about w-full bg-base-default flex flex-col justify-between gap-4 p-4 lg:p-6 lg:gap-16">
			<div class="flex justify-between items-center gap-4">
				<h1 class="text-3xl font-normal lg:text-5xl" style={view('about-title')}>
					{$_('navigation.about')}
				</h1>
			</div>
			<p class="font-normal text-balance mb-4 lg:text-xl" style={view('about-content')}>
				{$_('homepage.about-me')}
			</p>
		</div>
		<Information />
	</article>

	<article class="hidden w-full text-base-dark grid-rows-8 gap-2 lg:grid">
		{#if animationSteps.motifs}
			<div
				class="h-24 w-full rounded overflow-hidden transition-all"
				in:fly={{ y: -100, duration: 500 }}
			>
				<Motif />
			</div>
		{:else}
			<div class="h-24 w-full rounded overflow-hidden" />
		{/if}
		<figure class="h-full w-full row-span-6">
			<img
				src="/profil-2024.webp"
				alt="profile"
				class="object-cover w-full h-full"
				style={view('about-picture')}
			/>
		</figure>
		{#if animationSteps.motifs}
			<div
				class="h-24 w-full rounded overflow-hidden transition-all"
				in:fly={{ x: -100, duration: 500 }}
			>
				<Motif />
			</div>
		{:else}
			<div class="h-1/3 w-full rounded overflow-hidden" />
		{/if}
	</article>
	
	<article class="grid grid-rows-8 md:col-span-2 lg:col-span-1">
		<div class="row-span-7">
			{#if animationSteps.experiences}
				<WorkExperiences />
			{/if}
		</div>
		<div class="row-span-1">
			{#if animationSteps.myWorks}
				<MyWorks />
			{/if}
		</div>
	</article>
</section>
