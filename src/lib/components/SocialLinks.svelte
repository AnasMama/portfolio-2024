<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';

	const animationSteps = {
		icon_1: false,
		icon_2: false,
		icon_3: false
	};

	onMount(() => {
		setTimeout(() => {
			animationSteps.icon_1 = true;
		}, 0);
		setTimeout(() => {
			animationSteps.icon_2 = true;
		}, 150);
		setTimeout(() => {
			animationSteps.icon_3 = true;
		}, 300);
	});
</script>

{#if animationSteps.icon_1}
	<a
		aria-label="Linkedin"
		href="https://www.linkedin.com/in/anasmama/"
		target="_blank"
		rel="noopener"
		class="col-start-2 hover:scale-[1.2] transition-all duration-300"
		in:fade
	>
		<Icon name="linkedin" />
	</a>
{/if}
{#if animationSteps.icon_2}
	<a
		aria-label="GitHub"
		href="https://github.com/AnasMama/"
		target="_blank"
		rel="noopener"
		class="hover:scale-[1.2] transition-all duration-300"
		in:fade
	>
		<Icon name="github" />
	</a>
{/if}
{#if animationSteps.icon_3}
	<a
		aria-label="Email"
		href="mailto:anas.mama.pro@gmail.com"
		class="hover:scale-[1.2] transition-all duration-300"
		in:fade
	>
		<Icon name="mail" />
	</a>
{/if}
