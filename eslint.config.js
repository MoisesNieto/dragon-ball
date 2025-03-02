import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier,
  ["react-app", "react-app/jest"],
  {
    rules: {
      "no-unused-vars": "warn",
      "no-var": "error",
      "no-undef": "error",
      "react/jsx-uses-react": 0,
      "react/react-in-jsx-scope": 0,
      "react/react-jsx-runtime": 0,
      "react/prop-types": "off",
      "prettier/prettier": "error",
      "max-line-length": [true, { "limit": 120}]
    },
    ignores: [".dist/"],
  }

];

