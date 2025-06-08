// @ts-check
import { defineConfig } from 'astro/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/@shoelace-style/shoelace/dist/assets",
            dest: "shoelace-assets", // This puts all assets (including icons) to /shoelace-assets/assets/
          },
        ],
      }),
    ],
  },
});
