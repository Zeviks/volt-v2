/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require('flowbite/plugin'), 
    require('@tailwindcss/aspect-ratio')
  ],
  theme: {
    fontFamily: {
      display: ["Work Sans", "sans-serif"],
      body: ["Work Sans", "sans-serif"],
    },
    extend: {},
  },
  
}
