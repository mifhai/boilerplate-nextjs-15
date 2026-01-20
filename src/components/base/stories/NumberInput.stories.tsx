import { NumberInput } from "../NumberInput";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / NumberInput",
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;
type NumberInputStory = StoryObj<typeof meta>;

export const Default: NumberInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <NumberInput {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Jumlah",
    placeholder: "Masukkan jumlah",
  },
};

export const WithMinMax: NumberInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <NumberInput {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Umur",
    placeholder: "Masukkan umur",
    min: 0,
    max: 120,
  },
};

export const WithStep: NumberInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <NumberInput {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Harga",
    placeholder: "Masukkan harga",
    step: 1000,
    min: 0,
  },
};

export const WithPrefix: NumberInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <NumberInput {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Harga",
    placeholder: "Masukkan harga",
    prefix: "Rp ",
    thousandSeparator: ".",
  },
};

export const WithError: NumberInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <NumberInput {...args} />
    </div>
  ),
  args: {
    variety: "default",
    label: "Jumlah",
    placeholder: "Masukkan jumlah",
    error: "Jumlah wajib diisi",
  },
};

export const Custom: NumberInputStory = {
  render: args => (
    <div className="min-w-[300px]">
      <NumberInput {...args} />
    </div>
  ),
  args: {
    variety: "custom",
    label: "NumberInput Custom",
  },
};
