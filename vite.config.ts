import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";

// https://vite.dev/config/
export default defineConfig({
	plugins: [reactRouter(), netlifyReactRouter()],
});
