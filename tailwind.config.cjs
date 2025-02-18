/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'primary': '#003A70',    // Bluesoft's main blue
          'secondary': '#0056A4',  // Lighter blue for accents
          'accent': '#00A0E3',     // Highlight blue
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Montserrat', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }