<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/components/Icon.svelte';
	import { fade } from 'svelte/transition';
	import { view } from '$lib/function';
</script>

<a
	href="/about"
	class="group/about h-full w-full bg-base-default p-6 flex flex-col justify-between gap-4"
	in:fade={{ duration: 500 }}
>
	<div class="flex justify-between items-center gap-4">
		<p class="text-3xl font-normal lg:text-5xl" style={view('about-title')}>{$_('navigation.about')}</p>
		<Icon
			name="arrow"
			class="group-hover/about:translate-x-2 group-hover/about:-translate-y-2 transition-all duration-300"
		/>
	</div>
	<p class="font-normal w-4/5 text-balance mb-4 lg:text-xl" style={view('about-content')}>
		{$_('homepage.about-me')}
	</p>
</a>
