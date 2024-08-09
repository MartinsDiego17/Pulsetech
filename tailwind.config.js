const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'lg': {'max': '768px'},
        'xm': {'max': '1280px'},
      },
      colors: {
        "transparent-black": "rgb(0 0 0 / 50%)",
        "transparent-bg": "rgba(34, 34, 34, 0.5)",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
