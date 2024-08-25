<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<NavBar />
<main class="w-full max-w-screen-2xl p-8">
	<slot />
</main>
