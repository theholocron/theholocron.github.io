import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import type { Loader, LoaderContext } from "astro/loaders";
import matter from "gray-matter";
import { FAILSAFE_SCHEMA, load as loadYaml } from "js-yaml";

export interface LocalDocsSource {
	dir: string;
	slug: string;
}

export interface PackageDocsSource {
	package: string;
	slug: string;
}

export type DocsSource = LocalDocsSource | PackageDocsSource;

const EXTENSIONS = new Set([".md", ".mdx"]);

async function* walk(dir: string): AsyncGenerator<string> {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		if (entry.name.startsWith("_")) continue;
		const full = join(dir, entry.name);
		if (entry.isDirectory()) yield* walk(full);
		else if (EXTENSIONS.has(extname(entry.name))) yield full;
	}
}

function computeId(filePath: string, baseDir: string, slugPrefix: string): string {
	const rel = relative(baseDir, filePath).replace(/\\/g, "/");
	const noExt = rel.replace(/\.(mdx?)$/, "");
	const noIndex = noExt.replace(/\/index$/, "").replace(/^index$/, "");
	if (noIndex) {
		return slugPrefix ? `${slugPrefix}/${noIndex}` : noIndex;
	}
	return slugPrefix || "index";
}

function resolvePackageContentDir(packageName: string, root: URL): string {
	const req = createRequire(root);
	const main = req.resolve(packageName);
	// Walk up from the resolved entry to the directory containing package.json.
	// More robust than resolving `<pkg>/package.json` directly — that subpath
	// isn't guaranteed to be in the package's exports map.
	let dir = dirname(main);
	while (dir !== dirname(dir)) {
		if (existsSync(join(dir, "package.json"))) return join(dir, "content");
		dir = dirname(dir);
	}
	throw new Error(`Could not resolve content directory for ${packageName}`);
}

export function docsLoader(sources: DocsSource[]): Loader {
	return {
		name: "docs-loader",
		async load(ctx: LoaderContext) {
			ctx.store.clear();
			const siteRoot = fileURLToPath(ctx.config.root);

			const resolved = sources.map((s) =>
				"package" in s ? { dir: resolvePackageContentDir(s.package, ctx.config.root), slug: s.slug } : s
			);

			for (const { dir, slug: slugPrefix } of resolved) {
				for await (const absPath of walk(dir)) {
					const id = computeId(absPath, dir, slugPrefix);
					const raw = readFileSync(absPath, "utf-8");
					const { data: frontmatter, content: body } = matter(raw, {
						language: "yaml",
						engines: {
							yaml: (src) =>
								loadYaml(src, { schema: FAILSAFE_SCHEMA }) as Record<string, unknown>,
						},
					});
					const digest = createHash("sha256").update(raw).digest("hex").slice(0, 8);
					const filePath = relative(siteRoot, absPath);
					const data = await ctx.parseData({ id, data: frontmatter, filePath });
					ctx.store.set({ id, data, body, filePath, digest });
					ctx.watcher?.add(absPath);
				}
			}
		},
	};
}
