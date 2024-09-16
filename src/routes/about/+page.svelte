<script lang="ts">
	import { view } from '$lib/function';
	import { _ } from 'svelte-i18n';
	import WorkExperiences from './WorkExperiences.svelte';
	import Information from './Information.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { fade, fly } from 'svelte/transition';
	import Motif from '$lib/components/Motif.svelte';

	let isMotif = true;
</script>

<section class="w-full max-w-screen-2xl h-[800px] grid grid-cols-3 gap-2 mx-auto">
	<article class="flex flex-col justify-start">
		<div class="group/about w-full bg-base-default p-6 flex flex-col justify-between gap-16">
			<div class="flex justify-between items-center gap-4">
				<h1 class="text-5xl font-normal" style={view('about-title')}>
					{$_('navigation.about')}
				</h1>
			</div>
			<p class="text-xl font-normal text-balance mb-4" style={view('about-content')}>
				{$_('homepage.about-me')}
			</p>
		</div>
		<Information />
	</article>

	<article class="w-full text-base-dark flex flex-col gap-2">
		{#if isMotif}
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
				src="/profil-2024.jpg"
				alt="profile"
				class="object-cover w-full h-full"
				style={view('about-picture')}
			/>
		</figure>
		{#if isMotif}
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
	<article class="flex flex-col justify-between">
		<WorkExperiences />
		<a href="/projects" class="group/works w-full border-y border-base-light">
			<div class="row-span-1 h-full flex justify-between items-center gap-4 py-6 px-6" in:fade>
				<p class="text-5xl font-normal">{$_('homepage.my-works')}</p>
				<Icon
					name="arrow"
					width="2rem"
					height="2rem"
					class="group-hover/works:translate-x-2 group-hover/works:-translate-y-2 transition-all duration-300"
				/>
			</div>
		</a>
	</article>
</section>
