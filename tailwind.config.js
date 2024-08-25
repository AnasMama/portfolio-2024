/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				base: {
					dark: '#1A1818',
					light: '#ECE7E1'
				},
				info: {
					default: '#39A2AE'
				},
				error: {
					default: '#C14953'
				},
				warning: {
					default: '#BC8034'
				},
				success: {
					default: '#85CB33'
				}
			},
			aspectRatio: {
				'4/3': '4 / 3'
			},
			fontFamily: {
				sans: ['Battambang', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
