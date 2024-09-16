<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

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
