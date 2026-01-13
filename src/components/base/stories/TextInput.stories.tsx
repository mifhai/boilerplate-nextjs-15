import { TextInput } from "../TextInput";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type TextInputStory = StoryObj<typeof meta>;

export const Default: TextInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <TextInput {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Email",
  },
};
