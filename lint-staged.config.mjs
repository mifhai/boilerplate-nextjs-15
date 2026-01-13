/**
 * @see https://nextjs.org/docs/app/api-reference/config/eslint#running-lint-on-staged-files
 */

import { relative } from "node:path";

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => relative(process.cwd(), f)).join(" --file ")}`;

/**
 * @see https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "*.{js,jsx,ts,tsx,json}": [buildEslintCommand],
  "*.(ts|tsx)": () => ["tsc --noEmit"],
  "*": "secretlint",
};

export default config;
