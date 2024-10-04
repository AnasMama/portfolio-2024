<script lang="ts">
	import { _ } from 'svelte-i18n';
	import NavLink from './NavLink.svelte';
	import Burger from './Burger.svelte';
	import { onNavigate } from '$app/navigation';
	import { slide } from 'svelte/transition';

	let links = [
		{ href: '/about', label: 'navigation.about' },
		{ href: '/projects', label: 'navigation.projects' },
		{ href: '/contact', label: 'navigation.contact' }
	];

	let isMobileOpen = false;

	onNavigate(() => {
		isMobileOpen = false;
	});
</script>

<nav class="relative bg-base-dark text-base-light uppercase z-50 lg:bg-transparent">
	<div class="relative flex items-center justify-between text-lg gap-8 p-4 md:p-8 md:text-xl">
		<a href="/" class="mr-auto text-xl font-medium flex flex-col md:text-3xl">
			<span>MAMA ANAS</span>
			<span class="capitalize text-base font-light">Portfolio</span>
		</a>
		<Burger bind:isOpen={isMobileOpen} />
		{#key isMobileOpen}
			<ul
				class="absolute top-full w-full right-0 {isMobileOpen
					? 'flex'
					: 'hidden md:flex'} flex-col items-center justify-between text-lg bg-base-dark gap-8 py-8 px-16 z-50 md:text-xl md:py-0 md:px-8 md:relative md:flex md:flex-row lg:w-fit lg:gap-16"
				transition:slide
			>
				{#each links as { href, label }, i}
					<NavLink {href} {label} />
				{/each}
			</ul>
		{/key}
	</div>
</nav>
