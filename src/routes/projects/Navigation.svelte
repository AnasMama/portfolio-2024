<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { view } from '$lib/function';
	import type { ProjectType } from '$lib/interface';

	export let projects: ProjectType[] = [];
	export let selectedProject: ProjectType;
</script>

<h1 class="text-5xl font-normal hidden lg:flex" style={view('projects-title')}>{$_('homepage.my-works')}</h1>
<ul class="flex-col mb-auto hidden lg:flex">
	{#each projects as { title, slug }}
		<li class="text-3xl py-4 fade-in">
			<a href="#{slug}" class="group w-fit flex flex-col items-stretch gap-2">
				<h2 style={slug === selectedProject.slug ? view(`projects-title-${slug}`) : null}>
					{title}
				</h2>
				<div
					class="h-px w-0 bg-base-light group-hover:w-full transition-all duration-300"
					class:!w-full={slug === selectedProject.slug}
					style={slug === selectedProject.slug ? view(`projects-title-${slug}-underline`) : null}
				/>
			</a>
		</li>
	{/each}
</ul>
