<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Contact from './Contact.svelte';
	import Navigation from './Navigation.svelte';
	import { page } from '$app/stores';
	import Presentation from './Presentation.svelte';
	import { projects } from '$lib/store';

	$: activeSlug = $page.url.hash.split('#').pop();
	$: selectedProject = $projects.length
		? $projects.find((project) => project.slug === activeSlug) || $projects[0]
		: null;
</script>

<section class="w-full max-w-screen-2xl h-[800px] grid gap-2 mx-auto lg:grid-cols-5">
	<article class="h-[800px] flex flex-col gap-4 lg:col-span-2">
		{#if selectedProject}
			<figure class="w-full max-h-[55%] flex justify-center items-start shrink-0 overflow-hidden rounded">
				<img
					src={selectedProject?.img_desktop}
					alt="{selectedProject.title} desktop"
					class="w-full object-cover"
				/>
			</figure>
			<div class="w-full max-h-80 shrink-0 overflow-hidden flex items-stretch gap-4">
				<figure class="rounded overflow-hidden">
					<img
						src={selectedProject?.img_mobile}
						alt="{selectedProject.title} mobile"
						class="max-w-full"
					/>
				</figure>
				<figure class="aspect-square h-full flex justify-center items-center shrink-0 rounded overflow-hidden">
					<img
						src={selectedProject?.img_logo}
						alt="{selectedProject.title} logo"
						class="min-w-full min-h-full object-cover"
					/>
				</figure>
			</div>
		{/if}
	</article>
	<article class="flex flex-col justify-start gap-4 px-8 lg:col-span-2">
		{#if selectedProject}
			<Presentation {selectedProject} />
		{/if}
	</article>
	<article class="flex flex-col justify-start gap-8 lg:col-start-5">
		{#if selectedProject}
			<Navigation projects={$projects} {selectedProject} />
		{/if}
		<Contact />
	</article>
</section>
