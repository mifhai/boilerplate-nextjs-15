import { Switch } from "../Switch";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type SwitchStory = StoryObj<typeof meta>;

export const Default: SwitchStory = {
  args: {
    variety: "default",
    label: "Aktifkan notifikasi",
  },
};

export const Checked: SwitchStory = {
  args: {
    variety: "default",
    label: "Mode gelap",
    defaultChecked: true,
  },
};

export const Disabled: SwitchStory = {
  args: {
    variety: "default",
    label: "Switch disabled",
    disabled: true,
  },
};

export const WithDescription: SwitchStory = {
  args: {
    variety: "default",
    label: "Auto-save",
    description: "Simpan perubahan secara otomatis setiap 5 menit",
  },
};

export const Sizes: SwitchStory = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="xs" label="Extra Small" />
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium" />
      <Switch size="lg" label="Large" />
      <Switch size="xl" label="Extra Large" />
    </div>
  ),
};

export const Custom: SwitchStory = {
  args: {
    variety: "custom",
    label: "Switch Custom",
  },
};
