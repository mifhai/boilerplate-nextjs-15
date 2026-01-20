import { PasswordInput } from "../PasswordInput";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / PasswordInput",
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export default meta;
type PasswordInputStory = StoryObj<typeof meta>;

export const Default: PasswordInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <PasswordInput {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Password",
    placeholder: "Masukkan password",
  },
};

export const WithError: PasswordInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <PasswordInput {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Password",
    placeholder: "Masukkan password",
    error: "Password minimal 8 karakter",
  },
};

export const Custom: PasswordInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <PasswordInput {...args} />
    </div>
  ),
  args: {
    variety: "custom",
    label: "Password Custom",
  },
};
