// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://robinschreiner.github.io",
  integrations: [mdx(), sitemap()],
  output: "static",
  base: "yumkin-landingpage", // Replace with your repository name
  trailingSlash: "ignore"
});
