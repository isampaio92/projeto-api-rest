import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "semi": ["error", "always"],
      "no-console": "off",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "class-methods-use-this": "off",
      "import/first": "off",
      "no-param-reassign": "off",
      "camelcase": "off"
    },
  },
];
