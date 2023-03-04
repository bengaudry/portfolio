import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(path.resolve(__dirname), "src"),
        },
      ],
    }),
  ],
  base: "./",
  build: {
    outDir: "dist",
  },
});
