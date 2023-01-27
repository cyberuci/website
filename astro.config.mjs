import { defineConfig } from "astro/config";
import path from "path";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src/"),
        "@content": path.resolve("./content/")
      }
    }
  },
  site: "https://cyberuci.com",
  integrations: [svelte(), sitemap()],
  output: "server",
  adapter: vercel()
});