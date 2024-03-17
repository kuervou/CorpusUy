/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  primary: '#DC2D45',
			  secondary: '#262626',
			  accent: '#a91616',
			  light: '#E0DFDF'
			},
			grayscale: {
				25: '0.25',
				50: '0.5',
				75: '0.75',
			  },
			  letterSpacing: {
				tightest: '-.075em',
			  },

			fontFamily: {
				'oswald': ['"Oswald Variable"', 'sans-serif'],
				'antonio': ['"Antonio Variable"', 'sans-serif'],
			  },
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '2300px',
		  },
			fontSize: {
			  sm: '0.8rem',
			  base: '1rem',
			  xl: '1.25rem',
			  '2xl': '1.563rem',
			  '3xl': '1.953rem',
			  '4xl': '2.441rem',
			  '5xl': '3.052rem',
			  '4xl': '4.815rem',
			  '6xl': '6rem',
			  '7xl': '7rem',
			  '9xl': '9rem',
			  '11xl': '11rem',
			  '12xl': '12rem',
			}
	},
	plugins: [],
}
