<script lang="ts">
	import Motif from '$lib/components/Motif.svelte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { fly } from 'svelte/transition';
	import Title from './Title.svelte';
	import Contact from './Contact.svelte';
	import About from './About.svelte';
	import Picture from '$lib/components/Picture.svelte';
	import MyWorks from './MyWorks.svelte';

	let animationSteps = {
		picture: false,
		contact: false,
		projects: false,
		title: false,
		about: false,
		motifs: false
	};

	onMount(() => {
		setTimeout(() => {
			animationSteps.picture = true;
		}, 0);
		setTimeout(() => {
			animationSteps.contact = true;
		}, 150);
		setTimeout(() => {
			animationSteps.projects = true;
		}, 300);
		setTimeout(() => {
			animationSteps.title = true;
		}, 450);
		setTimeout(() => {
			animationSteps.about = true;
		}, 600);
		setTimeout(() => {
			animationSteps.motifs = true;
		}, 750);
	});
</script>

<section class="w-full max-w-screen-2xl h-[800px] grid grid-cols-12 grid-rows-7 gap-2 mx-auto">
	<Title isMotif={animationSteps.motifs} isTitle={animationSteps.title} />
	<div class="col-span-3 row-span-4">
		{#if animationSteps.picture}
			<Picture />
		{/if}
	</div>
	<div class="col-span-4 row-span-6 grid grid-rows-6">
		{#if animationSteps.projects}
			<MyWorks />
		{/if}
	</div>
	<div class="col-span-4 row-span-3">
		{#if animationSteps.about}
			<About />
		{/if}
	</div>
	<div class="col-span-4 row-span-3">
		{#if animationSteps.contact}
			<Contact />
		{/if}
	</div>
	<div class="col-span-4">
		{#if animationSteps.motifs}
			<div class="h-full w-full text-base-dark overflow-hidden" in:fly={{ x: 100, duration: 500 }}>
				<Motif />
			</div>
		{/if}
	</div>
</section>
