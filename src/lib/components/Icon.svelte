<!-- 
	@component
	Librairie d'icônes utilisées par les applications ViaPrepa.
	Les icônes sont en SVG et paramétrées pour modifier la couleur et la taille.
	Il est possible d'utiliser le type IconName pour avoir les icônes existants.
-->
<script lang="ts">
	type IconName = 'arrow' | 'linkedin' | 'github' | 'mail';

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
			},
            {
				box: 48,
				onlyStroke: false,
				name: 'linkedin',
				svg: `<g clip-path="url(#clip0_3806_188)"><rect width="48" height="48" rx="8" fill="transparent"/><path d="M43.658 0H4.34199C1.944 0 0 1.944 0 4.34199V43.6579C0 46.056 1.944 48 4.34199 48H43.6579C46.056 48 48 46.056 48 43.6579V4.34199C48 1.944 46.056 0 43.658 0ZM14.8532 41.4464C14.8532 42.1442 14.2875 42.7099 13.5897 42.7099H8.21089C7.51301 42.7099 6.94731 42.1442 6.94731 41.4464V18.8988C6.94731 18.2009 7.51301 17.6352 8.21089 17.6352H13.5897C14.2875 17.6352 14.8532 18.2009 14.8532 18.8988V41.4464ZM10.9003 15.5098C8.0782 15.5098 5.79041 13.222 5.79041 10.3999C5.79041 7.57784 8.0782 5.29005 10.9003 5.29005C13.7223 5.29005 16.0101 7.57784 16.0101 10.3999C16.0101 13.222 13.7225 15.5098 10.9003 15.5098ZM42.9625 41.5481C42.9625 41.8563 42.8401 42.1518 42.6222 42.3696C42.4043 42.5875 42.1088 42.7099 41.8007 42.7099H36.0289C35.7208 42.7099 35.4253 42.5875 35.2074 42.3696C34.9895 42.1518 34.8671 41.8563 34.8671 41.5481V30.9721C34.8671 29.3943 35.3299 24.0584 30.744 24.0584C27.1868 24.0584 26.4653 27.7107 26.3205 29.3497V41.5481C26.3205 41.8563 26.1981 42.1518 25.9802 42.3697C25.7623 42.5875 25.4668 42.7099 25.1587 42.7099H19.5763C19.2682 42.7099 18.9727 42.5875 18.7549 42.3696C18.537 42.1518 18.4146 41.8563 18.4145 41.5481V18.797C18.4146 18.4889 18.537 18.1934 18.7549 17.9755C18.9727 17.7577 19.2682 17.6353 19.5763 17.6352H25.1587C25.4668 17.6353 25.7623 17.7577 25.9801 17.9755C26.198 18.1934 26.3204 18.4889 26.3205 18.797V20.7641C27.6395 18.7847 29.5997 17.2569 33.7733 17.2569C43.0154 17.2569 42.9625 25.8913 42.9625 30.6356V41.5481Z" fill="currentColor"/></g><defs><clipPath id="clip0_3806_188"><rect width="48" height="48" fill="white"/></clipPath></defs>`
			},
            {
				box: 48,
				onlyStroke: false,
				name: 'github',
				svg: `<g clip-path="url(#clip0_3806_175)"><path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="transparent"/><path d="M24 1C10.74 1 0 11.56 0 24.584C0 35.006 6.876 43.844 16.41 46.96C17.61 47.182 18.05 46.452 18.05 45.826C18.05 45.266 18.03 43.782 18.02 41.816C11.344 43.238 9.936 38.652 9.936 38.652C8.844 35.93 7.266 35.202 7.266 35.202C5.092 33.74 7.434 33.77 7.434 33.77C9.844 33.934 11.11 36.2 11.11 36.2C13.25 39.806 16.728 38.764 18.1 38.162C18.316 36.636 18.934 35.598 19.62 35.008C14.29 34.418 8.688 32.39 8.688 23.354C8.688 20.78 9.618 18.676 11.158 17.026C10.888 16.43 10.078 14.032 11.368 10.784C11.368 10.784 13.378 10.152 17.968 13.202C19.888 12.678 21.928 12.418 23.968 12.406C26.008 12.418 28.048 12.678 29.968 13.202C34.528 10.152 36.538 10.784 36.538 10.784C37.828 14.032 37.018 16.43 36.778 17.026C38.308 18.676 39.238 20.78 39.238 23.354C39.238 32.414 33.628 34.408 28.288 34.988C29.128 35.696 29.908 37.142 29.908 39.352C29.908 42.508 29.878 45.044 29.878 45.81C29.878 46.428 30.298 47.166 31.528 46.93C41.13 43.834 48 34.99 48 24.584C48 11.56 37.254 1 24 1Z" fill="currentColor"/></g><defs><clipPath id="clip0_3806_175"><rect width="48" height="48" fill="white"/></clipPath></defs>`
			},
            {
				box: 48,
				onlyStroke: false,
				name: 'mail',
				svg: `<g clip-path="url(#clip0_3806_189)"><circle cx="24" cy="24" r="20" fill="transparent"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0001 0C37.2548 0 48 10.7456 48 23.9999C48 37.2544 37.2548 48 24.0001 48C10.7452 48 0 37.2544 0 23.9999C0 10.7456 10.7452 0 24.0001 0ZM29.4533 29.368C30.4479 30.781 32.0795 31.6552 33.8532 31.6552C36.8208 31.6552 39.2344 29.2413 39.2344 26.2738V24.0358C39.2344 19.9594 37.6537 16.1186 34.7735 13.2332C31.8984 10.3531 28.0694 8.76562 24 8.76562C19.9325 8.76562 16.104 10.3514 13.2277 13.2276C10.3515 16.1038 8.76562 19.9324 8.76562 24C8.76562 28.0676 10.3515 31.8962 13.2277 34.7723C16.104 37.6485 19.9325 39.2345 24 39.2345C27.1364 39.2345 30.1571 38.2875 32.7265 36.4888C33.4464 35.9849 33.6217 34.9924 33.1178 34.2725C32.614 33.5527 31.6211 33.377 30.9013 33.8808C28.8682 35.3036 26.4817 36.0512 24 36.0512C17.3555 36.0512 11.9489 30.6445 11.9489 24C11.9489 17.3555 17.3555 11.949 24 11.949C30.6586 11.949 36.0513 17.3857 36.0513 24.0358V26.2738C36.0513 27.4854 35.0648 28.472 33.8532 28.472C32.6415 28.472 31.6553 27.4854 31.6553 26.2738V19.0318C31.6553 18.1529 30.9426 17.4402 30.0636 17.4402C29.5554 17.4402 29.1028 17.6784 28.8114 18.0492C27.4509 16.9455 25.7519 16.3436 24 16.3447C19.7786 16.3447 16.3449 19.7786 16.3449 24.0001C16.3449 28.2216 19.7786 31.6553 24 31.6553C26.0707 31.6552 28.0247 30.8201 29.4533 29.368ZM24 28.4719C26.4653 28.4719 28.4719 26.4653 28.4719 23.9999C28.4719 21.5347 26.4653 19.5279 24 19.5279C21.5347 19.5279 19.5282 21.5347 19.5282 23.9999C19.5282 26.4651 21.5347 28.4719 24 28.4719Z" fill="currentColor"/></g><defs><clipPath id="clip0_3806_189"><rect width="48" height="48" fill="white"/></clipPath></defs>`
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
