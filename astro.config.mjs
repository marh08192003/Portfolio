// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://astro.build/config
export default defineConfig({
  site: "https://marh08192003.github.io",
  base: "/Portfolio",

  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },

  markdown: {},
});
