import { Textarea } from "../Textarea";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type TextareaStory = StoryObj<typeof meta>;

export const Default: TextareaStory = {
  render: args => (
    <div className="min-w-[300px]">
      <Textarea {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Deskripsi",
    placeholder: "Masukkan deskripsi...",
  },
};

export const WithError: TextareaStory = {
  render: args => (
    <div className="min-w-[300px]">
      <Textarea {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Deskripsi",
    placeholder: "Masukkan deskripsi...",
    error: "Deskripsi wajib diisi",
  },
};

export const Custom: TextareaStory = {
  render: args => (
    <div className="min-w-[300px]">
      <Textarea {...args} />
    </div>
  ),
  args: {
    variety: "custom",
    label: "Textarea Custom",
  },
};
