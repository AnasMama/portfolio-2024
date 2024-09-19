<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Logo from '$lib/components/Logo.svelte';
	import type { ProjectType } from '$lib/interface';

	export let selectedProject: ProjectType;

	$: ({ title, tags, description, techs } = selectedProject);
</script>

<div class="flex flex-col gap-4">
	<h2 class="text-5xl">{title}</h2>
	<div class="flex items-center gap-2">
        {#each tags as tag}
            <span class="text-sm font-medium bg-base-light text-base-dark px-2 py-1 rounded">{tag}</span>
        {/each}
	</div>
	<p>
		{@html description}
	</p>
	<span class="text-sm italic ml-auto">{$_(".")}</span>

	<span class="text-3xl">{$_("projects.technos")}</span>
	<div class="flex flex-wrap gap-8">
		{#each techs as name}
			<Logo {name} />
		{/each}
	</div>
</div>
