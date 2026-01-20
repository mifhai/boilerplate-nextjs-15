import { Select } from "../Select";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type SelectStory = StoryObj<typeof meta>;

const sampleData = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

export const Default: SelectStory = {
  render: args => (
    <div className="min-w-[300px]">
      <Select {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Framework",
    placeholder: "Pilih framework",
    data: sampleData,
  },
};

export const Searchable: SelectStory = {
  render: args => (
    <div className="min-w-[300px]">
      <Select {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Framework",
    placeholder: "Cari framework...",
    data: sampleData,
    searchable: true,
  },
};

export const WithError: SelectStory = {
  render: args => (
    <div className="min-w-[300px]">
      <Select {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Framework",
    placeholder: "Pilih framework",
    data: sampleData,
    error: "Pilih salah satu framework",
  },
};

export const Custom: SelectStory = {
  render: args => (
    <div className="min-w-[300px]">
      <Select {...args} />
    </div>
  ),
  args: {
    variety: "custom",
    label: "Select Custom",
    data: sampleData,
  },
};
