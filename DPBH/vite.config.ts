import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webExtension from "@samrum/vite-plugin-web-extension";

export default defineConfig({
	plugins: [
		react(),
		webExtension({
			manifest: {
				manifest_version: 3,
				name: "The Eye",
				version: "1.0.0",
				action: {
					default_popup: "index.html",
				},
				permissions: ["scripting", "activeTab"],
				host_permissions: ["<all_urls>"],
				background: {
					service_worker: "./public/background.js",
				},
			},
		}),
	],
});
