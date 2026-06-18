// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // URL absoluta de tu sitio en producción
  site: "https://marh08192003.github.io",
  // Ruta base correspondiente al nombre de tu repositorio
  base: "/Portfolio",

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  markdown: {},
});
