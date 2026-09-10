import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const preset = node();
export default defineConfig({
	...preset,
	description: "The Holocron Archives.",
	homepage: "https://docs.theholocron.dev/",
	repo: {
		...preset.repo,
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["astro", "docs", "starlight"],
	},
	tasks: ["lint", "review", "stale", "greetings", "typecheck", "audit", "dependencies", "bookkeeping"],
	providers: {
		...preset.providers,
		secrets: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
