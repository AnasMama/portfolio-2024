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

<section class="w-full max-w-screen-2xl h-[800px] grid grid-cols-5 gap-2 mx-auto">
	<article class="col-span-2 h-[800px] flex flex-col">
		<figure class="h-2/3 flex justify-center items-start overflow-hidden">
			<img
				src="https://cms.onicorn.dev/assets/a9c381b7-ea01-4241-8ed6-ab53237d00c8?key=desktop-screenshot"
				alt="hero"
				class="min-w-full min-h-full object-cover"
			/>
		</figure>
		<div class="w-full max-h-52 aspect-square overflow-hidden py-2 flex items-stretch gap-2">
			<div>
				<img
					src="https://cms.onicorn.dev/assets/8e00ab98-884e-4fd5-8109-82e31fdf640c?key=mobile-screenshot"
					alt="hero"
					class="min-w-full min-h-full object-cover"
				/>
			</div>
			<div>
				<img
					src="https://cms.onicorn.dev/assets/8e00ab98-884e-4fd5-8109-82e31fdf640c?key=mobile-screenshot"
					alt="hero"
					class="min-w-full min-h-full object-cover"
				/>
			</div>
			<div>
				<img
					src="https://cms.onicorn.dev/assets/8e00ab98-884e-4fd5-8109-82e31fdf640c?key=mobile-screenshot"
					alt="hero"
					class="min-w-full min-h-full object-cover"
				/>
			</div>
		</div>
	</article>
	<article class="col-span-2 flex flex-col justify-start gap-4 px-8">
		{#if selectedProject}
			<Presentation {selectedProject} />
		{/if}
	</article>
	<article class="col-start-5 flex flex-col justify-start gap-8">
		{#if selectedProject}
			<Navigation projects={$projects} {selectedProject} />
		{/if}
		<Contact />
	</article>
</section>
