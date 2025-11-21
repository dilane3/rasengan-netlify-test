import { defineConfig } from "rasengan";
import tailwindcss from "@tailwindcss/vite";
import { rasengan } from "rasengan/plugin";
import { configure } from "@rasenganjs/netlify";

export default defineConfig(async () => {
	return {
		vite: {
			plugins: [
				tailwindcss(),
				rasengan({
					adapter: configure(),
				}),
			],
		},
	};
});
