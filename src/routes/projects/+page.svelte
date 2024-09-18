<script lang="ts">
	import { view } from '$lib/function';
	import { _ } from 'svelte-i18n';
	import Contact from '../(home)/Contact.svelte';
	import { fly } from 'svelte/transition';
	import Icon from '$lib/components/Icon.svelte';

	const projects = [
		{
			title: 'Project 1',
			description: 'Description 1',
			image: '/project-1.webp',
			link: '/project-1'
		},
		{
			title: 'Project 2',
			description: 'Description 2',
			image: '/project-2.webp',
			link: '/project-2'
		},
		{
			title: 'Project 3',
			description: 'Description 3',
			image: '/project-3.webp',
			link: '/project-3'
		},
		{
			title: 'Project 3',
			description: 'Description 3',
			image: '/project-3.webp',
			link: '/project-3'
		},
		{
			title: 'Project 3',
			description: 'Description 3',
			image: '/project-3.webp',
			link: '/project-3'
		}
	];
</script>

<section class="w-full max-w-screen-2xl h-[800px] grid grid-cols-5 gap-2 mx-auto">
	<article class="col-span-2 flex flex-col">
		<figure class="h-2/3 flex justify-center items-center overflow-hidden">
			<img src="/my-works.webp" alt="hero" class="min-w-full min-h-full object-cover" />
		</figure>
		<div class="h-1/3 py-2 flex items-stretch gap-2">
			<div class="bg-slate-400 w-full h-full" />
			<div class="bg-slate-400 w-full h-full" />
		</div>
	</article>
	<article class="col-span-2 flex flex-col justify-start gap-4 px-8">
		<div class="flex flex-col gap-4">
			<h2 class="text-5xl">Extropian</h2>
			<div class="flex items-center gap-2">
				<span class="bg-base-light px-1 text-base-dark font-medium">Plateforme</span>
				<span class="bg-base-light px-1 text-base-dark font-medium">UX/UI design</span>
			</div>
			<p>
				Extropian, référence en ligne pour les passionnés de montres qui cherchent à acheter une
				montre de luxe mid-gamme de qualité : Content Management System (CMS) Base de données de
				référence des montres Marketplace, Comparateur de montres, Blog Optimisation du
				référencement sur les moteurs de recherches. Extropian, référence en ligne pour les
				passionnés de montres qui cherchent à acheter une montre de luxe mid-gamme de qualité :
				Content Management System (CMS) Base de données de référence des montres Marketplace,
				Comparateur de montres, Blog Optimisation du référencement sur les moteurs de recherches
			</p>
			<span class="text-sm italic ml-auto">Réaliser avec Onicorn</span>

			<span class="text-3xl">Technologies</span>
			<div class="flex flex-wrap gap-2">
				<span class="bg-base-light px-1 text-base-dark font-medium">Svelte</span>
				<span class="bg-base-light px-1 text-base-dark font-medium">Tailwind</span>
				<span class="bg-base-light px-1 text-base-dark font-medium">Vite</span>
				<span class="bg-base-light px-1 text-base-dark font-medium">Supabase</span>
			</div>
		</div>
	</article>
	<article class="col-start-5 flex flex-col justify-start gap-8">
		<h1 class="text-5xl font-normal" style={view('projects-title')}>{$_('homepage.my-works')}</h1>
		<ul class="flex flex-col mb-auto">
			{#each projects as project}
				<li class="text-3xl py-4">
					<a href={project.link}>
						<h2>{project.title}</h2>
					</a>
				</li>
			{/each}
		</ul>
		<a
			href="/contact"
			class="group/contact relative w-full flex flex-col justify-between gap-4 bg-error-default text-base-dark p-6 rounded hover:-translate-x-4 transition-all duration-300"
			in:fly={{ y: 100, duration: 500 }}
			style={view('contact')}
		>
			<div class="flex justify-between items-center gap-4">
				<p class="w-32 font-normal">{$_('homepage.have-question')}</p>
				<Icon
					name="arrow"
					width="2rem"
					height="2rem"
					class="group-hover/contact:translate-x-2 group-hover/contact:-translate-y-2 transition-all duration-300"
				/>
			</div>
			<p class="text-3xl font-normal">{$_('homepage.contact-me')}</p>
		</a>
	</article>
</section>
