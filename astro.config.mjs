// @ts-check
/// <reference types="@astrojs/partytown" />

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import favicons from "astro-favicons";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // Remove leading underscores from asset filenames
            const name = assetInfo.name?.startsWith("_")
              ? assetInfo.name.substring(1)
              : assetInfo.name || "asset";
            return `assets/${name}`;
          },
        },
      },
    },
  },
  integrations: [
    mdx(),
    react(),
    sitemap({
      lastmod: new Date(),
      changefreq: "weekly",
    }),
    favicons(),
  ],
  base: "./",
  site: "https://ambientelegal.co",
  outDir: "./docs",
  build: {
    assets: "assets",
  },
});
