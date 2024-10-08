<script lang="ts">
	import { view } from '$lib/function';
	import { fly } from 'svelte/transition';
</script>

<a
	href="/about"
	class="h-full w-full flex rounded overflow-hidden transition-all duration-300 hover:-translate-y-2"
	in:fly={{ y: -100, duration: 500 }}
>
	<img
		src="/profil-2024.webp"
		alt="profile"
		width="400"
		height="450"
		class="object-cover w-full h-full"
		style={view('about-picture')}
		loading="lazy"
	/>
</a>
