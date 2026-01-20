import { Button } from "../Button";
import { Tooltip } from "../Tooltip";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type TooltipStory = StoryObj<typeof Tooltip>;

export const Default: TooltipStory = {
  render: args => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    variety: "default",
    label: "Ini adalah tooltip",
  },
};

export const Primary: TooltipStory = {
  render: args => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    variety: "primary",
    label: "Tooltip dengan warna primary",
  },
};

export const Positions: TooltipStory = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      <Tooltip label="Top" position="top">
        <Button variety="outline">Top</Button>
      </Tooltip>
      <Tooltip label="Bottom" position="bottom">
        <Button variety="outline">Bottom</Button>
      </Tooltip>
      <Tooltip label="Left" position="left">
        <Button variety="outline">Left</Button>
      </Tooltip>
      <Tooltip label="Right" position="right">
        <Button variety="outline">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const WithArrow: TooltipStory = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip label="With Arrow" withArrow>
        <Button variety="outline">With Arrow</Button>
      </Tooltip>
      <Tooltip label="Without Arrow" withArrow={false}>
        <Button variety="outline">Without Arrow</Button>
      </Tooltip>
    </div>
  ),
};

export const Multiline: TooltipStory = {
  render: args => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    variety: "default",
    label: "Ini adalah tooltip dengan teks yang sangat panjang sehingga memerlukan multiline untuk menampilkannya dengan baik",
    multiline: true,
    w: 220,
  },
};

export const OpenedControlled: TooltipStory = {
  render: () => (
    <Tooltip label="Always visible" opened>
      <Button>Always visible</Button>
    </Tooltip>
  ),
};

export const Custom: TooltipStory = {
  render: args => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    variety: "custom",
    label: "Custom tooltip",
    color: "grape",
  },
};
