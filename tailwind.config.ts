import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // PERUBAHAN: Mengatur font default menjadi font Inter yang baru
        sans: ['var(--font-inter)'],
      },
      colors: {
        'background': '#111111',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1A1',
        'accent': '#E0E0E0',
      },
    },
  },
  plugins: [],
}

export default config

