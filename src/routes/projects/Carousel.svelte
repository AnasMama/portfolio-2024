<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '$lib/components/Icon.svelte';
	import { view } from '$lib/function';
	import type { ProjectType } from '$lib/interface';

	export let projects: ProjectType[];
	export let selectedProject: ProjectType;

	let currentIndex = 0;

	function nextProject() {
		if (currentIndex < projects.length - 1) currentIndex++;
		else currentIndex = 0;

		goto(`#${projects[currentIndex].slug}`);
	}

	function prevProject() {
		if (currentIndex > 0) currentIndex--;
		else currentIndex = projects.length - 1;

		goto(`#${projects[currentIndex].slug}`);
	}
</script>

<div class="w-full max-w-screen-sm text-base-light relative overflow-hidden mx-auto">
	<ul>
		{#each projects as { title, slug }}
			<li
				class="min-w-full flex justify-center items-center text-3xl py-4 fade-in"
				class:hidden={selectedProject.slug !== slug}
			>
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

	<button
		class="absolute left-4 top-1/2 transform -translate-y-1/2 hover:scale-105 transition-all duration-300"
		on:click={prevProject}
	>
		<Icon name="chevron" />
	</button>
	<button
		class="absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-105 transition-all duration-300"
		on:click={nextProject}
	>
		<Icon name="chevron" class="rotate-180" />
	</button>
</div>
