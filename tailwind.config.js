import THEME_COLORS from './src/theme/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: THEME_COLORS,
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
