import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: '#E10600', // rojo
		  secondary: '#1B1B1B', // negro
		  accent: '#CBEEF3', // celeste
		  light: '#FAFAFA', // blanco
		  dark: '#121212', // gris oscuro
		},
		grayscale: {
		  25: '0.25',
		  50: '0.5',
		  75: '0.75',
		  100: '1',
		},
		letterSpacing: {
		  tightest: '-.075em',
		},
		fontFamily: {
		  clash: ['"Clash Display"', 'system-ui', 'sans-serif'],
		},
		keyframes: {
		  'logo-pulse': {
			'0%, 100%': { transform: 'scale(1)' },
			'50%': { transform: 'scale(1.08)' },
		  },
		},
		animation: {
		  'logo-pulse': 'logo-pulse 1.2s ease-in-out infinite',
		},
	  },
	  screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
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
		'5xxl': '3.5rem',
		'6xl': '4.3rem',
		'7xl': '6rem',
		'9xl': '9rem',
		'11xl': '11rem',
		'12xl': '12rem',
	  },
	},
	plugins: [typography],
  };
  