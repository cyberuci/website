import { defineConfig } from "astro/config";
import path from "path";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src/"),
        "@content": path.resolve("./content/"),
      },
    },
  },
  integrations: [svelte()],
});
