<!-- 
	@component
    Composant qui permet d'afficher des messages d'alerte à l'utilisateur.
    Les messages peuvent être de type "success", "error" ou "warning".

    Utiliser la fonction showToast pour le faire apparaitre n'importe ou sur l'application.
    ex: showToast('Hello, world!', 'success')
-->

<script lang="ts">
	import { message } from '$lib/store';
	import { onMount, onDestroy } from 'svelte';
	import Icon from './Icon.svelte';
	import { fly } from 'svelte/transition';

	const TIMEOUT = 3000; // 3 secondes
	const TIMER = 50; // 50ms

	let progress = 0; // 0%

	let timer: ReturnType<typeof setInterval>;
	let timeout: ReturnType<typeof setTimeout>;

	$: isSuccess = $message && $message.type === 'success';
	$: isError = $message && $message.type === 'error';

	onMount(() => {
		const startTime = Date.now();

		timer = setInterval(() => {
			const elapsed = Date.now() - startTime;
			progress = (elapsed / TIMEOUT) * 100;

			if (progress >= 100) {
				progress = 100;
				clearTimeout(timeout);
				clearInterval(timer);
				setTimeout(() => message.set(null), 200);
			}
		}, TIMER);

		timeout = setTimeout(() => {
			clearInterval(timer);
			progress = 100;
			setTimeout(() => message.set(null), 200);
		}, TIMEOUT);
	});

	onDestroy(() => {
		clearTimeout(timeout);
		clearInterval(timer);
	});
</script>

{#if $message}
	<div
		in:fly={{ duration: 500, y: 50, delay: 100 }}
		out:fly={{ duration: 500, y: 50, delay: 100 }}
		class="fixed top-4 right-4 z-50 w-80 border border-base-light text-base-light bg-base-dark p-4 shadow-lg md:top-auto md:bottom-4"
	>
		<div class="flex items-start p-4 gap-4">
			<Icon
				name={isSuccess ? 'check-circle' : isError ? 'cross-circle' : 'warning'}
				color={isSuccess ? 'success' : isError ? 'error' : 'warning'}
                size="sm"
			/>
			<p>{$message.text}</p>
		</div>
		<button name="close-toast" on:click={() => message.set(null)} class="absolute right-2 top-2">
			<Icon name="cross" size="sm" />
		</button>
	</div>
{/if}
