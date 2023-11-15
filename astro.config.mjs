import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify/functions';

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
