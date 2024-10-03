<!-- 
	@component
	Librairie d'icônes utilisées par les applications.
	Les icônes sont en SVG et paramétrées pour modifier la couleur et la taille.
	Il est possible d'utiliser le type IconName pour avoir les icônes existants.
-->
<script lang="ts">
	import { icons, type IconName } from '$lib/icons';

	export let name: IconName = 'arrow';
	export let size: 'sm' | 'md' | 'lg' = 'md';
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

	const sizes = {
		sm: 1.4,
		md: 2,
		lg: 3.2
	};

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
		width="{sizes[size]}rem"
		height="{sizes[size]}rem"
		viewBox="0 0 {displayIcon.box} {displayIcon.box}"
	>
		{@html displayIcon?.svg}
	</svg>
{/if}
