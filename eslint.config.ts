import { base, typescript } from "@theholocron/eslint-config";
import type { Linter } from "eslint";

const config = [
	...base(),
	...typescript(),
	{
		files: ["src/env.d.ts"],
		rules: {
			// Astro generates env.d.ts with /// <reference path> — this is intentional.
			"@typescript-eslint/triple-slash-reference": "off",
		},
	},
	{ ignores: [".astro/**", "dist/**"] },
] satisfies Linter.Config[];

export default config;
