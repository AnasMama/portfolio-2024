<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/components/Icon.svelte';
	import { fly } from 'svelte/transition';
	import { view } from '$lib/function';
</script>

<a
	href="/contact"
	class="group/contact relative h-full w-full flex flex-col justify-between gap-4 bg-error-default text-base-dark p-6 rounded hover:-translate-x-4 transition-all duration-300"
	in:fly={{ y: 100, duration: 500 }}
	style={view('contact')}
>
	<div class="flex justify-between items-center gap-4">
		<p class="w-32 font-normal">{$_('homepage.have-question')}</p>
		<Icon
			name="arrow"
			class="group-hover/contact:translate-x-2 group-hover/contact:-translate-y-2 transition-all duration-300"
		/>
	</div>
	<p class="text-3xl font-normal lg:text-5xl">{$_('homepage.contact-me')}</p>
</a>
