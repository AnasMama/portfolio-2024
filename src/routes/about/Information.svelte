<script lang="ts">
	import { view } from '$lib/function';
	import { _ } from 'svelte-i18n';
	import { fly } from 'svelte/transition';

	$: information = {
		age: new Date().getFullYear() - 1993,
		location: 'Toulouse, France',
		languages: [$_('lang.french'), $_('lang.english')],
		hobbies: [$_('hobbies.manga'), $_('hobbies.music'), $_('hobbies.bass')]
	};
</script>

<div class="h-fit w-full rounded text-base-dark bg-info-default space-y-8 px-4 py-8 lg:px-8" in:fly={{ x: -100, duration: 500 }}>
	<h2 class="text-3xl font-normal lg:text-5xl">
		{$_('navigation.information')}
	</h2>
	<div class="flex flex-col gap-4">
		{#each Object.entries(information) as [key, value]}
			<div class="flex justify-between gap-4 border-b border-base-dark">
				<p class="text-balance font-bold lg:text-lg">
					{$_(`information.${key}`)}
				</p>
				<p class="text-balance font-normal">
					{#if Array.isArray(value)}
						{value.join(', ')}
					{:else}
						{value}
					{/if}
				</p>
			</div>
		{/each}
	</div>
</div>
