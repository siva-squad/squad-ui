module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["plugin:tailwindcss/recommended", "plugin:storybook/recommended", "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:storybook/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "react-hooks"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // Rules for third party plugins
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          // sort by react* → react*/** → recoil ...
          {
            pattern: "react*",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "react*/**",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "recoil",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "no-irregular-whitespace": ["error", { skipTemplates: true }],
  },
};
