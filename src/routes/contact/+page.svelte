<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Motif from '$lib/components/Motif.svelte';
	import { view } from '$lib/function';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Form from './Form.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let animationSteps = {
		picture: false,
		contact: false,
		projects: false,
		title: false,
		icons: false,
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
			animationSteps.icons = true;
		}, 600);
		setTimeout(() => {
			animationSteps.motifs = true;
		}, 450);
	});
</script>

<section
	class="w-full max-w-screen-2xl flex flex-col justify-between items-center gap-4 mx-auto overflow-clip lg:flex-row lg:h-[800px] lg:items-stretch lg:gap-2"
>
	<article class="w-full max-w-md">
		<div
			class="group/contact relative size-[min(100%,28rem)] flex flex-col justify-start items-center gap-4 bg-error-default p-4 text-base-dark rounded lg:gap-16 lg:p-8"
			style={view('contact')}
		>
			<h1 class="text-3xl font-normal lg:text-5xl">{$_('homepage.contact-me')}</h1>
			<p class="hidden font-normal max-w-xs text-balance lg:flex">{$_('contact.have-question')}</p>
			<div class="w-full flex justify-center items-center gap-12 lg:hidden">
				<SocialLinks />
			</div>
		</div>
		<div class="hidden w-full py-8 lg:grid lg:grid-cols-5 lg:items-center lg:gap-16">
			{#if animationSteps.icons}
				<SocialLinks />
			{/if}
		</div>
	</article>

	<article class="self-center w-full max-w-md p-2">
		<Form />
	</article>

	<article class="hidden w-20 h-full text-base-dark lg:flex">
		{#if animationSteps.motifs}
			<div
				class="h-full w-full rounded overflow-hidden transition-all"
				in:fly={{ y: 100, duration: 500 }}
			>
				<Motif />
			</div>
		{/if}
	</article>
</section>
