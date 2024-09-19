<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Contact from './Contact.svelte';
	import Navigation from './Navigation.svelte';
	import { page } from '$app/stores';
	import Presentation from './Presentation.svelte';
	import type { ProjectType } from '$lib/interface';

	const projects: ProjectType[] = [
		{
			title: 'Project 1',
			tags: ['Plateforme', 'UX/UI design'],
			description:
				'Extropian, référence en ligne pour les passionnés de montres qui cherchent à acheter une montre de luxe mid-gamme de qualité : Content Management System (CMS) Base de données de référence des montres Marketplace, Comparateur de montres, Blog Optimisation du référencement sur les moteurs de recherches. Extropian, référence en ligne pour les passionnés de montres qui cherchent à acheter une montre de luxe mid-gamme de qualité : Content Management System (CMS) Base de données de référence des montres Marketplace, Comparateur de montres, Blog Optimisation du référencement sur les moteurs de recherches',
			image: '/project-1.webp',
			link: '/project-1',
			slug: 'project-1',
			techs: ['Svelte', 'Tailwind', 'Vite']
		},
		{
			title: 'Project 2',
			tags: ['Plateforme', 'UX/UI design'],
			description: 'Description 2',
			image: '/project-2.webp',
			link: '/project-2',
			slug: 'project-2',
			techs: ['Svelte', 'Tailwind', 'Vite']
		},
		{
			title: 'Project 3',
			tags: ['Plateforme', 'UX/UI design'],
			description: 'Description 3',
			image: '/project-3.webp',
			link: '/project-3',
			slug: 'project-3',
			techs: ['Svelte', 'Tailwind', 'Vite']
		},
		{
			title: 'Project 4',
			tags: ['Plateforme', 'UX/UI design'],
			description: 'Description 4',
			image: '/project-4.webp',
			link: '/project-4',
			slug: 'project-4',
			techs: ['Svelte', 'Tailwind', 'Vite']
		},
		{
			title: 'Project 5',
			tags: ['Plateforme', 'UX/UI design'],
			description: 'Description 5',
			image: '/project-5.webp',
			link: '/project-5',
			slug: 'project-5',
			techs: ['Svelte', 'Tailwind', 'Vite']
		}
	];

	$: activeSlug = $page.url.hash.split('#').pop();
	$: selectedProject = projects.find((project) => project.slug === activeSlug) || projects[0];
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
		<Presentation {selectedProject} />
	</article>
	<article class="col-start-5 flex flex-col justify-start gap-8">
		<Navigation {projects} {selectedProject} />
		<Contact />
	</article>
</section>
