/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#5a7a6e',
          light: '#e8f0ed',
        },
        site: {
          bg: '#fafaf8',
          border: '#e5e5e0',
          text: '#2c2c2c',
          muted: '#6b6b6b',
        },
      },
      fontFamily: {
        serif: ['var(--font-garamond)', 'Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
