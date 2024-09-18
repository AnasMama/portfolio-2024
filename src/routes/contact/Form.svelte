<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { fade } from 'svelte/transition';

	let animationSteps = {
		line1: false,
		line2: false,
		line3: false
	};

	let name = '';
	let email = '';
	let message = '';

	$: emailFlag = email && !checkEmail(email);

	function checkEmail(email: string) {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	onMount(() => {
		setTimeout(() => {
			animationSteps.line1 = true;
		}, 0);
		setTimeout(() => {
			animationSteps.line2 = true;
		}, 50);
		setTimeout(() => {
			animationSteps.line3 = true;
		}, 100);
	});
</script>

<form class="flex flex-col gap-8" in:fade>
	<label class="flex flex-col gap-4">
		<span>{$_('form.name')}</span>
		<input
			type="text"
			id="name"
			name="name"
			class="bg-transparent border-b border-base-light px-4 py-2 w-full transition-all duration-300 {animationSteps.line1
				? 'max-w-full'
				: 'max-w-0'}"
			bind:value={name}
			required
		/>
	</label>
	<label class="relative flex flex-col gap-4">
		<span>{$_('form.email')}</span>
		<input
			type="email"
			id="email"
			name="email"
			class="bg-transparent border-b border-base-light px-4 py-2 w-full transition-all duration-300 {animationSteps.line2
				? 'max-w-full'
				: 'max-w-0'}"
			bind:value={email}
			required
		/>
		{#if emailFlag}
			<p
				class="absolute top-full text-error-default text-sm italic pt-2 transition-all duration-300"
			>
				{$_('form.invalid-email')}
			</p>
		{/if}
	</label>
	<label class="flex flex-col gap-4">
		<span>{$_('form.message')}</span>
		<textarea
			id="message"
			name="message"
			class="h-32 bg-transparent border border-base-light px-4 py-2 w-full transition-all duration-300 {animationSteps.line3
				? 'max-w-full'
				: 'max-w-0'}"
			bind:value={message}
			required
		/>
	</label>

	<button
		type="submit"
		class="group/button self-end flex justify-end items-center border border-base-light uppercase pl-8 pr-6 py-2 transition-all duration-300"
	>
		<span class="mr-2">{$_('form.submit')}</span>
		<Icon name="arrow" width="1rem" height="1rem" class="w-0 rotate-45 group-hover/button:w-4 transition-all duration-300" />
	</button>
</form>
