import { base, typescript } from "@theholocron/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
const config = [...base(), ...typescript(), { ignores: [".astro/**", "dist/**"] }];

export default config;
