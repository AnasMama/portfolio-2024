<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Logo from '$lib/components/Logo.svelte';
	import type { ProjectType } from '$lib/interface';
	import { fade } from 'svelte/transition';

	export let selectedProject: ProjectType;

	$: ({ title, tags, description, technologies } = selectedProject);
	$: translated_description =
		description.find((desc) => desc.lang.toLocaleLowerCase() === 'fr')?.content || '';
</script>

{#key selectedProject}
	<div class="flex flex-col gap-4" in:fade>
		<h2 class="hidden text-3xl lg:text-5xl lg:flex">{title}</h2>
		<div class="flex items-center flex-wrap gap-2">
			{#each tags as tag}
				<span class="text-sm font-medium capitalize bg-base-light text-base-dark px-2 py-1 rounded">
					{tag}
				</span>
			{/each}
		</div>
		<p>
			{@html translated_description}
		</p>
		{#if selectedProject.company === 'Onicorn'}
			<div class="ml-auto flex items-end gap-2">
				<span class="text-sm italic">{$_('projects.company')}</span>
				<a href="https://onicorn.com" target="_blank" rel="noopener noreferrer" class="max-w-20 hover:scale-110 transition-all duration-300" >
					<img src="/logo-onicorn.svg" alt="Onicorn" />
				</a>
			</div>
		{/if}

		<span class="text-xl lg:text-3xl">{$_('projects.technos')}</span>
		<div class="flex flex-wrap gap-4 md:gap-8">
			{#each technologies as name}
				<Logo {name} />
			{/each}
		</div>

		{#if selectedProject.link}
			<span class="text-xl lg:text-3xl">{$_('projects.link')}</span>
			<a href={selectedProject.link} target="_blank" rel="noopener noreferrer" class="group w-fit">
				{selectedProject.link}
				<div class="h-px w-0 bg-base-light group-hover:w-full transition-all duration-300" />
			</a>
		{/if}
	</div>
{/key}
