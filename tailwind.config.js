/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure this is correctly set
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Kanit', 'serif'], // Add Inter font to Tailwind
      },
    },
  },
  plugins: [],
}
