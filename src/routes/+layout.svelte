<script lang="ts">
	import type { LayoutData } from './$types';
	import { onNavigate } from '$app/navigation';
	import NavBar from '$lib/components/NavBar.svelte';
	import Toaster from '$lib/components/Toaster.svelte';
	import { message, projects } from '$lib/store';
	import '../app.css';

	export let data: LayoutData;

	$: projects.set(data.projects);

	onNavigate((navigation) => {
		// @ts-ignore
		if (document.startViewTransition && navigation.to?.route.id !== navigation.from?.route.id)
			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
			});
	});
</script>

<NavBar />
<main class="w-full">
	<slot />
</main>

{#if $message}
	<Toaster />
{/if}
