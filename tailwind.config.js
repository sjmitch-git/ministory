/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				accent: 'var(--accent-color)',
				tertiary: 'var(--tertiary-color)',
				neutral: 'var(--neutral-color)',
				dark: 'var(--dark-color)',
				info: 'var(--info-color)',
				success: 'var(--success-color)',
				warning: 'var(--warning-color)',
				error: 'var(--error-color)',
				danger: 'var(--error-color)',
			},
		},
	},
	plugins: [],
}
