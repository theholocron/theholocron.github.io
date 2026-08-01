import starlight from "@astrojs/starlight";
import { docsTheme } from "@theholocron/docs-theme";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://docs.theholocron.dev",
	integrations: [
		starlight({
			title: "The Holocron",
			plugins: [docsTheme()],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/theholocron",
				},
			],
			sidebar: [
				{
					label: "Projects",
					items: [
						// Static overview pages
						"projects/configuration",
						"projects/templates",
						// Per-package groups: Overview is explicit because the index
						// pages carry sidebar: { hidden: true } in their frontmatter
						// (they hide themselves on their own repo's site). Sub-pages
						// use autogenerate per directory so new pages appear automatically.
						{
							label: "Clients",
							items: [
								{ label: "Overview", link: "projects/clients" },
								{ autogenerate: { directory: "projects/clients" } },
							],
						},
						{
							label: "Configs",
							items: [
								{ label: "Overview", link: "projects/configs" },
								{ autogenerate: { directory: "projects/configs" } },
							],
						},
						{
							label: "Holocron",
							items: [
								{ label: "Overview", link: "projects/holocron" },
								{ autogenerate: { directory: "projects/holocron" } },
							],
						},
						{
							label: "Skills",
							items: [
								{ label: "Overview", link: "projects/skills" },
								{ autogenerate: { directory: "projects/skills" } },
							],
						},
						{
							label: "Themes",
							items: [
								{ label: "Overview", link: "projects/themes" },
								{ autogenerate: { directory: "projects/themes" } },
							],
						},
						{
							label: "Utils",
							items: [
								{ label: "Overview", link: "projects/utils" },
								{ autogenerate: { directory: "projects/utils" } },
							],
						},
					],
				},
				{
					label: "Contributing",
					items: [
						"contributing",
						"contributing/report-an-issue",
						"contributing/request-a-feature",
						"contributing/update-the-documentation",
						"contributing/pull-a-request",
						"contributing/join-the-team",
					],
				},
				{
					label: "Maintaining",
					items: [
						"maintaining",
						"maintaining/working-with-the-code",
						"maintaining/provide-support",
						"maintaining/label-issues",
						"maintaining/pull-requests",
						"maintaining/releases",
					],
				},
				{
					label: "Guides",
					items: [{ autogenerate: { directory: "guides" } }],
				},
				{
					label: "Reference",
					items: [{ autogenerate: { directory: "reference" } }],
				},
			],
		}),
	],
});
