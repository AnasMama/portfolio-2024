<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';

	export let href = '';
	export let label = '';

	$: isActive = $page.url.pathname === href;
</script>

<li class="group w-fit flex flex-col gap-1 fade-in">
	<a {href}>{$_(label)}</a>
	<div
		class="h-px w-0 bg-base-light group-hover:w-full transition-all duration-300 {isActive
			? '!w-full'
			: ''}"
	/>
</li>
