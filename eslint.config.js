import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default [
  // 1. Ignorar carpetas generadas automáticamente y temporales
  {
    ignores: [".astro/**", "dist/**", "node_modules/**"],
  },

  // 2. Configuración base de TypeScript para archivos JS/TS
  ...tseslint.configs.recommended,

  // 3. Configuración para archivos Astro (Añadiendo el parser de TS)
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },

  // 4. Configuración general de accesibilidad para JSX/TSX
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
];
