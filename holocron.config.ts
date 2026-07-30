import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, providers } = node();
export default defineConfig({
	description: "The Holocron Archives.",
	homepage: "https://docs.theholocron.dev/",
	repo: {
		...repo,
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["astro", "docs", "starlight"],
	},
	workflows: ["lint"],
	providers: {
		...providers,
		secrets: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards"],
} satisfies HolocronConfig);
