/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0E2738',
        'orange': '#E9892D',
        'burgundy': '#A00230',
        'navy-black': '#181520'
      },
    },
  },
  plugins: [],
}
