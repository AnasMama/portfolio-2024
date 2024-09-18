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

<section class="w-full max-w-screen-2xl h-[800px] flex justify-between items-stretch gap-2 mx-auto">
	<article class="w-full max-w-md">
		<div
			class="group/contact relative size-[min(100%,28rem)] flex flex-col justify-start gap-16 bg-error-default text-base-dark p-8 rounded"
			style={view('contact')}
		>
			<h1 class="text-5xl font-normal">{$_('homepage.contact-me')}</h1>
			<p class="font-normal max-w-xs text-balance">{$_('contact.have-question')}</p>
		</div>
        <div class="w-full grid grid-cols-5 items-center gap-16 py-8">
            {#if animationSteps.icons}
                <SocialLinks />
            {/if}
        </div>
	</article>

	<article class="self-center w-full max-w-md">
		<Form />
	</article>

	<article class="w-20 h-full text-base-dark">
		{#if animationSteps.motifs}
			<div
				class="h-full w-full rounded overflow-hidden transition-all"
				in:fly={{ y: -100, duration: 500 }}
			>
				<Motif />
			</div>
		{/if}
	</article>
</section>
