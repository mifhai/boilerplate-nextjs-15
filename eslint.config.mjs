import antfu from "@antfu/eslint-config";
import eslintPluginNext from "@next/eslint-plugin-next";
import eslintPluginTanstackQuery from "@tanstack/eslint-plugin-query";
// import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import eslintPluginSecurity from "eslint-plugin-security";
import eslintPluginSonarJS from "eslint-plugin-sonarjs";
import storybook from "eslint-plugin-storybook";

const ignoreFiles = [
  "./README.md",
  "migrations/**/*",
  "!.storybook",
];
const maxPrintWidth = 120;

export default antfu(
  {
    react: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style
    stylistic: {
      semi: true,
      quotes: "double",
      indent: 2,
    },

    // Format settings
    formatters: {
      css: true,
    },

    // Ignored paths
    ignores: ignoreFiles,
  },
  // --- Next.js Specific Rules ---
  {
    plugins: {
      "@next/next": eslintPluginNext,
    },
    rules: {
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs["core-web-vitals"].rules,
    },
  },
  // --- Tailwind Rules ---
  {
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
      ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,
      "better-tailwindcss/no-unregistered-classes": "warn",
      "better-tailwindcss/enforce-consistent-line-wrapping": ["warn", { printWidth: maxPrintWidth }],
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/app/globals.css",
      },
    },
  },
  // --- Security Rules ---
  eslintPluginSecurity.configs.recommended,
  // --- SonarJS Rules ---
  eslintPluginSonarJS.configs.recommended,
  // --- Tanstack Query Rules ---
  ...eslintPluginTanstackQuery.configs["flat/recommended"],
  // --- Storybook Rules ---
  ...storybook.configs["flat/recommended"],
  // --- Custom Rule Overrides ---
  {
    rules: {
      "antfu/no-top-level-await": "off", // Allow top-level await
      "style/brace-style": ["error", "1tbs"], // Use the default brace style
      "style/max-len": ["error", { code: maxPrintWidth, ignoreStrings: true }],
      "style/arrow-parens": ["error", "as-needed"], // Use "as-needed" for arrow function parameters
      "style/padding-line-between-statements": ["error", { blankLine: "always", prev: "*", next: "return" }],
      "ts/consistent-type-definitions": "off",
      "ts/no-explicit-any": "warn",
      "react/no-array-index-key": "error",
      "react/prefer-destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      "node/prefer-global/process": "off", // Allow using `process.env`
      "import/no-named-as-default": 0,
      "perfectionist/sort-imports": ["error", {
        groups: [
          "value-builtin",
          "value-core",
          "value-external",
          "value-internal",
          "value-parent",
          "value-subpath",
          "value-sibling",
          "value-side-effect",
          "value-side-effect-style",
          "value-index",
          "value-style",
          [
            "type-external",
            "named-type-builtin",
            "named-type-internal",
            "named-type-parent",
            "named-type-sibling",
            "named-type-index",
            "value-ts-equals-import",
          ],
        ],
        customGroups: [
          {
            groupName: "value-core",
            elementNamePattern: ["^react$", "^react-.+", "^next($|/)"],
            type: "custom",
            modifiers: ["value"],
          },
        ],
        newlinesBetween: "always",
        type: "alphabetical",
        order: "asc",
      }],
      "no-console": ["warn", { allow: ["debug", "error"] }],
      "test/padding-around-all": "error", // Add padding in test files
      "test/prefer-lowercase-title": "off", // Allow using uppercase titles in test titles
    },
  },
);
