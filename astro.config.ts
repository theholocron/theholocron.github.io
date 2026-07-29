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
					items: [{ autogenerate: { directory: "projects" } }],
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
