import { fileURLToPath } from "node:url";

import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection } from "astro:content";

import { docsLoader } from "./loaders/docs-loader.ts";

export const collections = {
	docs: defineCollection({
		loader: docsLoader([
			{
				dir: fileURLToPath(new URL("content/docs", import.meta.url)),
				slug: "",
			},
			{
				package: "@theholocron/clients-docs",
				slug: "projects/clients",
			},
		]),
		schema: docsSchema(),
	}),
};
