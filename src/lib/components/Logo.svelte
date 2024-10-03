<script lang="ts">
	import type { LogoName } from "$lib/interface";
	import { LOGOS } from "$lib/const";
	
	export let name: LogoName;

	const logo = LOGOS.find((logo) => logo.name === name) || null;
</script>

{#if logo}
	<a href={logo.link} target="_blank" rel="noopener noreferrer" aria-label={name} class="flex flex-col items-center gap-4 font-medium text-sm">
		<div
			class="size-8 flex justify-center items-center hover:scale-110 transition-all duration-300 md:size-12"
		>
			{@html logo.svg}
		</div>
        <span>{logo.name}</span>
	</a>
{/if}
