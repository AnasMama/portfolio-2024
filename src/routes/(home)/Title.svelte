<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Motif from '$lib/components/Motif.svelte';
	import { fly } from 'svelte/transition';

	export let isMotif = false;
	export let isTitle = false;
</script>

<div class="h-full w-full col-span-5 row-span-4 text-base-dark flex flex-col gap-2">
	{#if isMotif}
		<div
			class="h-1/3 w-full rounded overflow-hidden transition-all"
			in:fly={{ y: -100, duration: 500 }}
		>
			<Motif />
		</div>
	{:else}
		<div class="h-1/3 w-full rounded overflow-hidden" />
	{/if}
	{#if isTitle}
		<div class="h-full w-full rounded bg-info-default p-8" in:fly={{ x: -100, duration: 500 }}>
			<p class="text-6xl text-balance">{@html $_('homepage.developer')}</p>
		</div>
	{:else}
		<div class="h-full w-full rounded p-8" />
	{/if}
	{#if isMotif}
		<div
			class="h-1/3 w-full rounded overflow-hidden transition-all"
			in:fly={{ x: -100, duration: 500 }}
		>
			<Motif />
		</div>
	{:else}
		<div class="h-1/3 w-full rounded overflow-hidden" />
	{/if}
</div>
