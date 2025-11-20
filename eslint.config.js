import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  // frontend override
  {
    files: ["frontend/**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  // backend override
  {
    files: ["api/**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
  },
]);
