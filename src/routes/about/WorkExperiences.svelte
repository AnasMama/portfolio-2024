<script lang="ts">
	import { view } from '$lib/function';
	import { _ } from 'svelte-i18n';
	import { fade, fly } from 'svelte/transition';

	export let workExperiences: WorkExperienceType[] = [];

	type WorkExperienceType = {
		title: string;
		date: string;
		place: string;
		city: string;
		description: string | string[];
	};

	$: workExperiences = [
		{
			title: $_('work-experience.fullstack-developer'),
			date: '2022 - 2024',
			place: 'Onicorn',
			city: 'Toulouse',
			description: [
				$_('work-experience.onicorn.conception'),
				$_('work-experience.onicorn.development'),
				$_('work-experience.onicorn.clean')
			]
		},
		{
			title: $_('work-experience.teaching-assistant'),
			date: '2021 - 2022',
			place: 'Wild Code School',
			city: 'Toulouse',
			description: [$_('work-experience.wild.teaching'), $_('work-experience.wild.project')]
		}
	];
</script>

<div class="w-full flex flex-col justify-start gap-8 p-4 lg:p-6">
	<div class="text-balance flex justify-between items-center gap-4" in:fade>
		<h1 class="text-3xl font-normal lg:text-5xl">
			{$_('navigation.work-experiences')}
		</h1>
	</div>

	{#each workExperiences as { title, date, place, city, description }, i}
		<div class="flex flex-col gap-2" in:fly={{ x: 100, duration: 500, delay: (i + 1) * 300 }}>
			<h2 class="text-xl font-normal lg:text-3xl">
				{title}
			</h2>
			<p class="italic text-balance lg:text-lg">
				{date} - {place} / {city}
			</p>
			{#if typeof description === 'string'}
				<p>
					{description}
				</p>
			{:else}
				<ul class="space-y-2 list-disc pl-4">
					{#each description as desc}
						<li>{desc}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</div>
