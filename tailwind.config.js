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
        // Celulares pequeños (320px y menores)
        'xs': {'max': '320px'},
        // Celulares medianos (480px y menores)
        'sm': {'max': '480px'},
        // Celulares grandes (640px y menores)
        'md': {'max': '640px'},
        // Tablets pequeñas (768px y menores)
        'lg': {'max': '768px'},
        // Tablets grandes (1024px y menores)
        'xl': {'max': '1024px'},
        // Laptops pequeñas (1280px y menores)
        '2xl': {'max': '1280px'},
        // Monitores medianos (1440px y menores)
        '3xl': {'min': '1440px'},
        // Monitores grandes (1600px y menores)
        '4xl': {'min': '1600px'}
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
