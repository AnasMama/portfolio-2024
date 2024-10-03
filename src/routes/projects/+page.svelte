<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Contact from './Contact.svelte';
	import Navigation from './Navigation.svelte';
	import { page } from '$app/stores';
	import Presentation from './Presentation.svelte';
	import { projects } from '$lib/store';
	import { view } from '$lib/function';
	import Carousel from './Carousel.svelte';

	$: activeSlug = $page.url.hash.split('#').pop();
	$: selectedProject = $projects.length
		? $projects.find((project) => project.slug === activeSlug) || $projects[0]
		: null;
</script>

<section
	class="w-full max-w-screen-2xl grid gap-2 mx-auto overflow-clip lg:grid-cols-5 lg:h-[800px]"
>
	<article class="w-full flex gap-4 lg:hidden">
		{#if selectedProject}
			<Carousel projects={$projects} {selectedProject} />
		{/if}
	</article>
	<article class="flex flex-col gap-4 lg:col-span-2 lg:h-[800px]">
		{#if selectedProject}
			<figure
				class="w-full flex justify-center items-start shrink-0 overflow-hidden rounded max-w-screen-md mx-auto aspect-video lg:aspect-auto lg:max-h-[55%]"
			>
				<img
					src={selectedProject?.img_desktop}
					alt="{selectedProject.title} desktop"
					class="w-full object-cover"
				/>
			</figure>
			<div class="hidden w-full max-h-80 shrink-0 overflow-hidden items-stretch gap-4 lg:flex">
				<figure class="rounded overflow-hidden">
					<img
						src={selectedProject?.img_mobile}
						alt="{selectedProject.title} mobile"
						class="max-w-full"
					/>
				</figure>
				<figure
					class="aspect-square h-full flex justify-center items-center shrink-0 rounded overflow-hidden"
				>
					<img
						src={selectedProject?.img_logo}
						alt="{selectedProject.title} logo"
						class="min-w-full min-h-full object-cover"
					/>
				</figure>
			</div>
		{/if}
	</article>
	<article class="flex flex-col justify-start gap-4 py-2 px-4 md:p-4 lg:py-0 lg:px-8 lg:col-span-2">
		{#if selectedProject}
			<Presentation {selectedProject} />
		{/if}
	</article>
	<article class="flex-col justify-start gap-8 lg:col-start-5">
		{#if selectedProject}
			<Navigation projects={$projects} {selectedProject} />
		{/if}
		<Contact />
	</article>
</section>
