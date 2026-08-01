import { base, typescript } from "@theholocron/eslint-config";
import type { Linter } from "eslint";

const config = [...base(), ...typescript(), { ignores: [".astro/**", "dist/**"] }] satisfies Linter.Config[];

export default config;
