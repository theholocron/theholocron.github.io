// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.theholocron.dev",
	integrations: [
		starlight({
			title: "The Holocron",
			social: {
				github: "https://github.com/theholocron",
			},
			sidebar: [
				{
					label: "Projects",
					autogenerate: { directory: "projects" },
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
					autogenerate: { directory: "guides" },
					/*
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: 'guides/example' },
					],
					*/
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
