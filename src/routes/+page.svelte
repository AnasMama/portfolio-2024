<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Motif from '$lib/components/Motif.svelte';
	import { _ } from 'svelte-i18n';
</script>

<section class="w-full max-w-screen-2xl h-[800px] grid grid-cols-12 grid-rows-7 gap-2 mx-auto">
	<div class="h-full w-full col-span-5 row-span-4 text-base-dark flex flex-col gap-2">
		<div class="h-1/3 w-full rounded bg-base-light overflow-hidden">
			<Motif />
		</div>
		<div class="h-full w-full rounded bg-info-default p-8">
			<p class="text-6xl text-balance">{@html $_('homepage.developer')}</p>
		</div>
		<div class="h-1/3 w-full rounded bg-base-light overflow-hidden">
			<Motif />
		</div>
	</div>
	<a
		href="/about"
		class="h-full w-full col-span-3 row-span-4 overflow-hidden transition-all duration-300 hover:-translate-y-2"
	>
		<img src="/profil-2024.jpg" alt="hero" class="object-cover w-full h-full" />
	</a>
	<div class="col-span-4 row-span-6 grid grid-flow-ro">
		<a href="/projects" class="group/works h-full w-full row-span-3 p-6">
			<div class="flex justify-between items-center gap-4">
				<p class="text-5xl font-normal">{$_('homepage.my-works')}</p>
				<Icon
					name="arrow"
					width="2rem"
					height="2rem"
					class="group-hover/works:translate-x-2 group-hover/works:-translate-y-2 transition-all duration-300"
				/>
			</div>
		</a>
		<div class="h-full w-full border-b border-base-light" />
		<div class="h-full w-full border-b border-base-light" />
		<div class="h-full w-full border-b border-base-light" />
	</div>

	<a
		href="/about"
		class="group/about h-full w-full bg-base-default p-6 flex flex-col justify-between gap-4 col-span-4 row-span-3"
	>
		<div class="flex justify-between items-center gap-4">
			<p class="text-5xl font-normal">{$_('navigation.about')}</p>
			<Icon
				name="arrow"
				width="2rem"
				height="2rem"
				class="group-hover/about:translate-x-2 group-hover/about:-translate-y-2 transition-all duration-300"
			/>
		</div>
		<p class="text-xl font-normal w-4/5 text-balance mb-4">
			{$_('homepage.about-me')}
		</p>
	</a>
	<a
		href="/contact"
		class="group/contact relative h-full w-full flex flex-col justify-between bg-error-default text-base-dark p-6 col-span-4 row-span-3 rounded hover:-translate-x-4 transition-all duration-300"
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
	<div class="h-full w-full bg-base-light text-base-dark overflow-hidden col-span-4">
		<Motif />
	</div>
</section>
