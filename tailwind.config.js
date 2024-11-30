/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font globally
      },
      screens: {
        lg: "1100px", // Customize 'lg' for 1100px breakpoint
      },
    },
  },
  plugins: [],
}
