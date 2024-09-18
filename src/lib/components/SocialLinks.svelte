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
		href="https://www.linkedin.com/in/anasmama/"
		target="_blank"
		rel="noopener"
		class="col-start-2 hover:scale-[1.2] transition-all duration-300"
		in:fade
	>
		<Icon name="linkedin" width="2rem" height="2rem" />
	</a>
{/if}
{#if animationSteps.icon_2}
	<a
		href="https://www.linkedin.com/in/anasmama/"
		target="_blank"
		rel="noopener"
		class="hover:scale-[1.2] transition-all duration-300"
		in:fade
	>
		<Icon name="github" width="2rem" height="2rem" />
	</a>
{/if}
{#if animationSteps.icon_3}
	<a
		href="mailto:anas.mama.am@gmail.com"
		class="hover:scale-[1.2] transition-all duration-300"
		in:fade
	>
		<Icon name="mail" width="2rem" height="2rem" />
	</a>
{/if}
