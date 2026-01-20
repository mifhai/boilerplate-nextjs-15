import { Radio, RadioGroup } from "../Radio";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type RadioStory = StoryObj<typeof meta>;

export const Default: RadioStory = {
  args: {
    variety: "default",
    label: "Opsi Radio",
  },
};

export const Group: RadioStory = {
  render: () => (
    <RadioGroup label="Pilih jenis kelamin" defaultValue="male">
      <Radio value="male" label="Laki-laki" />
      <Radio value="female" label="Perempuan" />
    </RadioGroup>
  ),
};

export const GroupHorizontal: RadioStory = {
  render: () => (
    <RadioGroup label="Pilih metode pembayaran" defaultValue="transfer">
      <div className="flex gap-4">
        <Radio value="transfer" label="Transfer Bank" />
        <Radio value="ewallet" label="E-Wallet" />
        <Radio value="cod" label="COD" />
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: RadioStory = {
  render: () => (
    <RadioGroup label="Pilih paket" defaultValue="basic">
      <Radio value="basic" label="Basic" description="Cocok untuk pemula" />
      <Radio value="pro" label="Pro" description="Fitur lengkap untuk profesional" />
      <Radio value="enterprise" label="Enterprise" description="Solusi untuk perusahaan besar" />
    </RadioGroup>
  ),
};

export const Disabled: RadioStory = {
  args: {
    variety: "default",
    label: "Radio Disabled",
    disabled: true,
  },
};

export const Custom: RadioStory = {
  args: {
    variety: "custom",
    label: "Radio Custom",
  },
};
