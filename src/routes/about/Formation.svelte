<script lang="ts">
    import { view } from '$lib/function';
    import { _ } from 'svelte-i18n';

    export let formations: FormationType[] = [];

    type FormationType = {
        title: string;
        date: string;
        place: string;
        description: string | string[];
    };

    $: formations = [
        {
            title: $_('work-experience.fullstack-developer'),
            date: '2022 - 2024',
            place: $_('formation.university'),
            description: $_('formation.bachelor-description')
        },
        {
            title: $_('formation.master'),
            date: '2022 - 2024',
            place: $_('formation.university'),
            description: $_('formation.master-description')
        }
    ];
</script>