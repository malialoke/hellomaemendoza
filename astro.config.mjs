import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://maemendoza.com',
  integrations: [tailwind()],
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
