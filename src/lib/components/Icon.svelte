<!-- 
	@component
	Librairie d'icônes utilisées par les applications ViaPrepa.
	Les icônes sont en SVG et paramétrées pour modifier la couleur et la taille.
	Il est possible d'utiliser le type IconName pour avoir les icônes existants.
-->
<script lang="ts">
	type IconName = 'arrow';

	export let name: IconName = 'arrow';
	export let width = '1.4rem';
	export let height = '1.4rem';
	export let color:
		| 'primary'
		| 'secondary'
		| 'base'
		| 'white'
		| 'error'
		| 'success'
		| 'black'
		| 'current'
		| 'warning' = 'current';

	const style = {
		fill: {
			primary: 'fill-primary-default',
			secondary: 'fill-secondary-default',
			white: 'fill-white',
			base: 'fill-base',
			gray: 'fill-grayscale-default',
			success: 'fill-success-default',
			error: 'fill-error-default',
			info: 'fill-info-default',
			warning: 'fill-warning-default',
			current: 'fill-current'
		},
		stroke: {
			primary: 'stroke-primary-default',
			secondary: 'stroke-secondary-default',
			white: 'stroke-white',
			base: 'stroke-base',
			gray: 'stroke-grayscale-default',
			success: 'stroke-success-default',
			error: 'stroke-error-default',
			info: 'stroke-info-default',
			warning: 'stroke-warning-default',
			current: 'stroke-current'
		}
	};

	const icons: { box: number; onlyStroke: boolean; box2?: number; name: IconName; svg: string }[] =
		[
			{
				box: 38,
				onlyStroke: false,
				name: 'arrow',
				svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M9.23796 28.7621C8.74327 28.2673 8.74327 27.4652 9.23796 26.9707L26.0756 10.1329H15.2003C14.5007 10.1329 13.9336 9.56583 13.9336 8.86628C13.9336 8.16672 14.5007 7.59961 15.2003 7.59961H29.1336C29.4695 7.59961 29.7918 7.73307 30.0294 7.97062C30.2668 8.20817 30.4003 8.53033 30.4003 8.86628V22.7996C30.4003 23.4992 29.8331 24.0663 29.1336 24.0663C28.4342 24.0663 27.867 23.4992 27.867 22.7996V11.9243L11.0293 28.7621C10.5346 29.2566 9.73262 29.2566 9.23796 28.7621Z" />`
			}
		];

	/**
	 * Icône à afficher, déterminé par le nom passé en paramètre (variable name)
	 */
	const displayIcon = icons.find((e) => e.name === name);
	$: colorSvg = displayIcon?.onlyStroke
		? `${style['stroke'][color as keyof (typeof style)['stroke']]} fill-transparent `
		: `${style['fill'][color as keyof (typeof style)['stroke']]} stroke-transparent`;
</script>

{#if displayIcon}
	<svg
		class="{colorSvg} {$$props.class} shrink-0"
		{width}
		{height}
		viewBox="0 0 {displayIcon.box} {displayIcon?.box2 || displayIcon.box}"
	>
		{@html displayIcon?.svg}
	</svg>
{/if}
