/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#00938A",
        secondary: "#FFD8A1",
        dark: "#002422",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        headline: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
