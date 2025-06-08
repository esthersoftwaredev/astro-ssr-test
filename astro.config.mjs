// @ts-check
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [],
		css: {
			preprocessorOptions: {
				scss: {
					api: "legacy",
					// includePaths: ["node_modules"], // not needed but keep checking analogjs for updates on legacy api usage
				},
			},
		},
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
