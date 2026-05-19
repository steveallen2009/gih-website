/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold:       '#D4A843',
        'gold-lt':  '#E8C068',
        'gold-dk':  '#B08830',
        navy:       '#07111F',
        'navy-2':   '#0C1A2E',
        'navy-3':   '#112240',
        azure:      '#1B4FD8',
        'azure-dk': '#0D2B8A',
      },
      fontFamily: {
        display: ['var(--font-lora)', 'Georgia', 'serif'],
        body:    ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}