// @ts-check
import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

import netlify from "@astrojs/netlify";

import analogjsangular from "@analogjs/astro-angular";

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
		ssr: {
			// transform these packages during SSR. Globs supported
			noExternal: ["@rx-angular/**"],
		},
	},

	adapter: netlify(),
	output: "server",
	integrations: [
		analogjsangular({
			vite: {
				inlineStylesExtension: "scss|sass|less",
			},
		}),
	],
});
