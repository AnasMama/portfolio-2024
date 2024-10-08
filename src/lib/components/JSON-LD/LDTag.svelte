<script lang="ts">
	import { serializeSchema } from './json-ld';

	export let schema: { [key: string]: any };
</script>

<svelte:head>
	{@html serializeSchema(schema)}
</svelte:head>
