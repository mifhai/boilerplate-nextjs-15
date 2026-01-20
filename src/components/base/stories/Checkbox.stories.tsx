import { Checkbox } from "../Checkbox";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type CheckboxStory = StoryObj<typeof meta>;

export const Default: CheckboxStory = {
  args: {
    variety: "default",
    label: "Saya setuju dengan syarat dan ketentuan",
  },
};

export const Checked: CheckboxStory = {
  args: {
    variety: "default",
    label: "Checkbox tercentang",
    defaultChecked: true,
  },
};

export const Disabled: CheckboxStory = {
  args: {
    variety: "default",
    label: "Checkbox disabled",
    disabled: true,
  },
};

export const WithDescription: CheckboxStory = {
  args: {
    variety: "default",
    label: "Newsletter",
    description: "Dapatkan update terbaru via email",
  },
};

export const Custom: CheckboxStory = {
  args: {
    variety: "custom",
    label: "Checkbox Custom",
  },
};
