import { Button } from "../Button";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type ButtonStory = StoryObj<typeof meta>;

export const Default: ButtonStory = {
  args: {
    children: "Submit",
    variety: "default",
  },
};

export const Secondary: ButtonStory = {
  args: {
    children: "Batal",
    variety: "secondary",
  },
};

export const Outline: ButtonStory = {
  args: {
    children: "Submit",
    variety: "outline",
  },
};

export const Reset: ButtonStory = {
  args: {
    children: "Reset",
    variety: "reset",
  },
};

export const Text: ButtonStory = {
  args: {
    children: "Text",
    variety: "text",
  },
};
