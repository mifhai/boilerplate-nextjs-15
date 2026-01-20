import { Badge } from "../Badge";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type BadgeStory = StoryObj<typeof meta>;

export const Default: BadgeStory = {
  args: {
    variety: "default",
    children: "Default",
  },
};

export const Secondary: BadgeStory = {
  args: {
    variety: "secondary",
    children: "Secondary",
  },
};

export const Outline: BadgeStory = {
  args: {
    variety: "outline",
    children: "Outline",
  },
};

export const Success: BadgeStory = {
  args: {
    variety: "success",
    children: "Success",
  },
};

export const Warning: BadgeStory = {
  args: {
    variety: "warning",
    children: "Warning",
  },
};

export const ErrorVariant: BadgeStory = {
  args: {
    variety: "error",
    children: "Error",
  },
};

export const AllVariants: BadgeStory = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variety="default">Default</Badge>
      <Badge variety="secondary">Secondary</Badge>
      <Badge variety="outline">Outline</Badge>
      <Badge variety="success">Success</Badge>
      <Badge variety="warning">Warning</Badge>
      <Badge variety="error">Error</Badge>
    </div>
  ),
};

export const Sizes: BadgeStory = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </div>
  ),
};

export const Custom: BadgeStory = {
  args: {
    variety: "custom",
    children: "Custom",
    color: "grape",
  },
};
