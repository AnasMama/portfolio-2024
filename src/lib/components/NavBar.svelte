<script lang="ts">
	import { _ } from 'svelte-i18n';
	import NavLink from './NavLink.svelte';
	import Burger from './Burger.svelte';

	let links = [
		{ href: '/about', label: 'navigation.about' },
		{ href: '/projects', label: 'navigation.projects' },
		{ href: '/contact', label: 'navigation.contact' }
	];

	let isMobileOpen = false;
</script>

<nav class="bg-base-dark text-base-light uppercase">
	<div class="relative flex items-center justify-between text-lg gap-8 p-4 md:p-8 md:text-xl">
		<a href="/" class="mr-auto text-3xl font-medium flex flex-col">
			<span>MAMA ANAS</span>
			<span class="capitalize text-base font-light">Portfolio</span>
		</a>
		<Burger bind:isOpen={isMobileOpen} />
		<ul
			class="absolute top-full right-0 {isMobileOpen
				? 'flex'
				: 'hidden md:flex'} flex-col items-center justify-between text-xl bg-base-dark gap-4 px-4 md:px-8 md:relative md:flex md:flex-row lg:gap-16"
		>
			{#each links as { href, label }, i}
				<NavLink {href} {label} />
			{/each}
		</ul>
	</div>
</nav>
