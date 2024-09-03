<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/components/Icon.svelte';
	import { fly } from 'svelte/transition';
</script>

<a
	href="/contact"
	class="group/contact relative h-full w-full flex flex-col justify-between bg-error-default text-base-dark p-6 rounded hover:-translate-x-4 transition-all duration-300"
	in:fly={{ y: 100, duration: 500 }}
>
	<div class="flex justify-between items-center gap-4">
		<p class="w-32 font-normal">{$_('homepage.have-question')}</p>
		<Icon
			name="arrow"
			width="2rem"
			height="2rem"
			class="group-hover/contact:translate-x-2 group-hover/contact:-translate-y-2 transition-all duration-300"
		/>
	</div>
	<p class="text-5xl font-normal">{$_('homepage.contact-me')}</p>
</a>
