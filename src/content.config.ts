import { fileURLToPath } from "node:url";

import { docsSchema } from "@astrojs/starlight/schema";
import { createDocsLoader } from "@theholocron/docs-theme/loader";
import { defineCollection } from "astro:content";

export const collections = {
	docs: defineCollection({
		loader: createDocsLoader([
			{
				dir: fileURLToPath(new URL("content/docs", import.meta.url)),
				slug: "",
			},
			{
				package: "@theholocron/clients-docs",
				slug: "projects/clients",
			},
			{
				package: "@theholocron/configs-docs",
				slug: "projects/configs",
			},
			{
				package: "@theholocron/holocron-docs",
				slug: "projects/holocron",
			},
			{
				package: "@theholocron/skills-docs",
				slug: "projects/skills",
			},
			{
				package: "@theholocron/themes-docs",
				slug: "projects/themes",
			},
			{
				package: "@theholocron/utils-docs",
				slug: "projects/utils",
			},
		]),
		schema: docsSchema(),
	}),
};
