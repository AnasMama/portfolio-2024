<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Motif from '$lib/components/Motif.svelte';
	import { fly } from 'svelte/transition';

	export let isMotif = false;
	export let isTitle = false;
</script>

<div class="h-full w-full text-base-dark flex flex-col md:col-span-3 lg:gap-2 lg:col-span-5 lg:row-span-4">
	{#if isMotif}
		<div
			class="h-8 w-full rounded overflow-hidden transition-all lg:h-1/3"
			in:fly={{ y: -100, duration: 500 }}
		>
			<Motif />
		</div>
	{:else}
		<div class="h-1/3 w-full rounded overflow-hidden" />
	{/if}
	{#if isTitle}
		<div class="h-full w-full rounded bg-info-default p-4 lg:p-8" in:fly={{ x: -100, duration: 500 }}>
			<h1 class="text-3xl text-balance md:text-5xl lg:text-6xl">{@html $_('homepage.developer')}</h1>
		</div>
	{:else}
		<div class="h-full w-full rounded p-8" />
	{/if}
	{#if isMotif}
		<div
			class="h-8 w-full rounded overflow-hidden transition-all lg:h-1/3"
			in:fly={{ x: -100, duration: 500 }}
		>
			<Motif />
		</div>
	{:else}
		<div class="h-1/3 w-full rounded overflow-hidden" />
	{/if}
</div>
