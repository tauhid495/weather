/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#CCCCFF",

          "secondary": "#60a9c4",

          "accent": "#6e8c02",

          "neutral": "#181D20",

          "base-100": "#313549",

          "info": "#7BDCF4",

          "success": "#58E4D6",

          "warning": "#F3B43F",

          "error": "#F1290E",
        },
      },

      {
        light: {

          "primary": "#ffffff",

          "secondary": "#f25ca9",

          "accent": "#a8bcff",

          "neutral": "#221424",

          "base-100": "#FCFCFD",

          "info": "#4DC5EA",

          "success": "#22B49C",

          "warning": "#9E8410",

          "error": "#F8444D",
        },
      },

    ],
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}

