/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#e84c3d',
      secondary: '#f39c12',
    },
    borderRadius: {
      button: '8px',
    }
  }
},
  plugins: [],
};