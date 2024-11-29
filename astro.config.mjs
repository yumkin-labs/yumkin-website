// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://robinschreiner.github.io",
  base: "yumkin-landingpage",
  integrations: [mdx(), sitemap()],
  output: "static",
});
