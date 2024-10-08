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
	import LdTag from '$lib/components/JSON-LD/LDTag.svelte';
	import { personSchema } from '$lib/components/JSON-LD/json-ld';
	import { page } from '$app/stores';

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

<svelte:head>
	<title>Portfolio | Anas MAMA</title>
	<meta name="title" content="Portfolio | Anas MAMA" />
	<meta name="description" content={$_('homepage.meta.description')} />
	<meta name="keywords" content={$_('homepage.meta.keywords')} />
	<meta name="author" content="Anas MAMA" />
	<meta name="robots" content="index, follow" />
	<LdTag
		schema={personSchema(
			'Anas MAMA',
			$_('json.job'),
			$_('homepage.meta.description'),
			['https://www.linkedin.com/in/anasmama', 'https://github.com/AnasMama'],
			'Freelance',
			$page.url.origin
		)}
	/>
</svelte:head>

<section
	class="w-full max-w-screen-2xl gap-2 mx-auto overflow-clip md:grid md:grid-cols-5 lg:h-[800px] lg:grid-cols-12 lg:grid-rows-7"
>
	<Title isMotif={animationSteps.motifs} isTitle={animationSteps.title} />
	<div class="hidden md:flex md:col-span-2 lg:row-span-4 lg:col-span-3">
		{#if animationSteps.picture}
			<Picture />
		{/if}
	</div>
	<div class="hidden col-span-4 row-span-6 lg:grid lg:grid-rows-6">
		{#if animationSteps.projects}
			<MyWorks />
		{/if}
	</div>
	<div class="md:col-span-3 lg:col-span-4 lg:row-span-3">
		{#if animationSteps.about}
			<About />
		{/if}
	</div>
	<div class="md:col-span-2 lg:col-span-4 lg:row-span-3">
		{#if animationSteps.contact}
			<Contact />
		{/if}
	</div>
	<div class="md:col-span-5 lg:col-span-4 lg:row-span-6 lg:hidden">
		{#if animationSteps.projects}
			<MyWorks />
		{/if}
	</div>
	<div class="h-24 col-span-5 lg:col-span-4 lg:h-full">
		{#if animationSteps.motifs}
			<div class="h-full w-full text-base-dark overflow-hidden" in:fly={{ x: 100, duration: 500 }}>
				<Motif />
			</div>
		{/if}
	</div>
</section>
