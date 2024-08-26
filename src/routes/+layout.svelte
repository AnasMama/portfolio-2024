<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<NavBar />
<main class="w-full">
	<slot />
</main>
