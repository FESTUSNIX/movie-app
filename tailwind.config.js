/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				priority: '0px',
				'3xl': '2000px'
			},
			fontFamily: {
				montserrat: ['var(--font-montserrat)'],
				sans: ['var(--font-open-sans)']
			},
			colors: {
				primary: '#059669',
				bg: {
					DEFAULT: '#05161e',
					hover: '#0f2028',
					active: '#14252d'
				},
				textSecondary: '#4E4E50'
			}
		}
	},
	plugins: []
}
