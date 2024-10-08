<script lang="ts">
	export let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<button
	on:click={toggle}
	name="burger"
	class="relative group/burger w-12 aspect-square flex flex-col justify-center gap-3 transition-all duration-300 md:hidden {isOpen ? "" : "items-start"}"
>
	<span class="absolute top-1/2 -translate-y-3 w-10/12 h-px bg-base-light group-hover/burger:w-full transition-all duration-300 {isOpen ? "rotate-45 !translate-y-0 !w-10/12" : ""}" />
	<span class="absolute top-1/2 w-10/12 h-px bg-base-light group-hover/burger:w-8/12 transition-all duration-300 {isOpen ? "scale-0" : ""}" />
	<span class="absolute top-1/2 translate-y-3 w-10/12 h-px bg-base-light group-hover/burger:w-4/12 transition-all duration-300 {isOpen ? "-rotate-45 !-translate-y-0 !w-10/12" : ""}" />
</button>
