import { PATH_BASE } from "../src/constants/uri-path";

import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: [
    {
      from: "../public",
      to: PATH_BASE,
    },
  ],
  core: {
    disableTelemetry: true,
  },
};
export default config;
