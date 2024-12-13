// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://yumkin.de/",

  // Only for FTP Push
  // base: "/test/",
  base: "/",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        page !== "https://yumkin.de/admin" &&
        page !== "https://yumkin-website.netlify.com/admin",
    }),
    ,
    tailwind(),
    alpinejs(),
  ],
  output: "static",
  trailingSlash: "ignore",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
