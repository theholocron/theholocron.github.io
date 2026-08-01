import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { docsSchema } from "@astrojs/starlight/schema";
import { createDocsLoader } from "@theholocron/docs-theme/loader";
import { defineCollection } from "astro:content";

const require = createRequire(import.meta.url);

function resolveDocsContent(pkg: string): string {
	const parts = pkg.startsWith("@") ? pkg.split("/", 2) : [pkg];
	for (const searchPath of require.resolve.paths(pkg) ?? []) {
		const candidate = join(searchPath, ...parts);
		if (existsSync(join(candidate, "package.json"))) {
			return join(candidate, "content");
		}
	}
	throw new Error(`Cannot resolve content directory for ${pkg}`);
}

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
				dir: resolveDocsContent("@theholocron/holocron-docs"),
				slug: "projects/holocron",
			},
			{
				dir: resolveDocsContent("@theholocron/skills-docs"),
				slug: "projects/skills",
			},
			{
				package: "@theholocron/themes-docs",
				slug: "projects/themes",
			},
			{
				dir: resolveDocsContent("@theholocron/utils-docs"),
				slug: "projects/utils",
			},
		]),
		schema: docsSchema(),
	}),
};
