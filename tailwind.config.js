/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    fontFamily: {
      display: ["Work Sans", "sans-serif"],
      body: ["Work Sans", "sans-serif"],
    },
    extend: {},
  },
};
