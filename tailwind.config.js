/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'qs' : ['Quicksand'],
      'inter': ['Inter']
    }
  },
  plugins: [require("daisyui")],
}

