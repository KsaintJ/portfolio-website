/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef3ff',
          100: '#dce7ff',
          200: '#b9cfff',
          300: '#8aadff',
          400: '#5580ff',
          500: '#2d59fc',
          600: '#1a3ee0',
          700: '#162fba',
          800: '#172a96',
          900: '#172876',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      boxShadow: {
        'brand': '0 4px 24px -2px rgba(45, 89, 252, 0.25)',
        'gold':  '0 4px 24px -2px rgba(245, 158, 11, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
