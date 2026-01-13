import React from "react";

import { MantineProvider } from "@mantine/core";

import fontInter from "../src/configs/font-inter";
import { theme } from "../src/configs/mantine-theme";

import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: { current: "light" },
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
    docs: {
      toc: true, // Enable table of contents
    },
  },
  decorators: [
    Story => (
      <main className={`
        ${fontInter.variable}
        antialiased
      `}
      >
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Story />
        </MantineProvider>
      </main>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
