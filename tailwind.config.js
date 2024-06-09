/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'open-quote': '\201C', 
        'close-quote': '\201D', 
      },
    },
  },
  plugins: [],
}

