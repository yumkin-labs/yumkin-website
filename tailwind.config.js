/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#00938A",
        dark: "#002422",
        primary: {
          DEFAULT: "#BA307A",
        },
        alert: {
          DEFAULT: "#FFE6F2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
