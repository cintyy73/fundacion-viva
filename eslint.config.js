import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */

export default [
  // Config general para archivos del proyecto
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    // ...
  },
  // Config específica para vite.config.ts
  {
    files: ["vite.config.ts"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        // SIN project: evita el error
      },
    },
    // otras reglas si querés
  },
];
