import { ActionIcon } from "../ActionIcon";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / ActionIcon",
  component: ActionIcon,
} satisfies Meta<typeof ActionIcon>;

export default meta;
type ActionIconStory = StoryObj<typeof meta>;

// Simple icon components for stories
const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m-9-9h6m6 0h6" />
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
);

const IconEdit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

export const Default: ActionIconStory = {
  render: args => (
    <ActionIcon {...args}>
      <IconSettings />
    </ActionIcon>
  ),
  args: {
    variety: "default",
  },
};

export const Secondary: ActionIconStory = {
  render: args => (
    <ActionIcon {...args}>
      <IconHeart />
    </ActionIcon>
  ),
  args: {
    variety: "secondary",
  },
};

export const Outline: ActionIconStory = {
  render: args => (
    <ActionIcon {...args}>
      <IconEdit />
    </ActionIcon>
  ),
  args: {
    variety: "outline",
  },
};

export const Subtle: ActionIconStory = {
  render: args => (
    <ActionIcon {...args}>
      <IconTrash />
    </ActionIcon>
  ),
  args: {
    variety: "subtle",
  },
};

export const AllVariants: ActionIconStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <ActionIcon variety="default">
        <IconSettings />
      </ActionIcon>
      <ActionIcon variety="secondary">
        <IconHeart />
      </ActionIcon>
      <ActionIcon variety="outline">
        <IconEdit />
      </ActionIcon>
      <ActionIcon variety="subtle">
        <IconTrash />
      </ActionIcon>
    </div>
  ),
};

export const Sizes: ActionIconStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <ActionIcon size="xs">
        <IconSettings />
      </ActionIcon>
      <ActionIcon size="sm">
        <IconSettings />
      </ActionIcon>
      <ActionIcon size="md">
        <IconSettings />
      </ActionIcon>
      <ActionIcon size="lg">
        <IconSettings />
      </ActionIcon>
      <ActionIcon size="xl">
        <IconSettings />
      </ActionIcon>
    </div>
  ),
};

export const Disabled: ActionIconStory = {
  render: args => (
    <ActionIcon {...args}>
      <IconSettings />
    </ActionIcon>
  ),
  args: {
    variety: "default",
    disabled: true,
  },
};

export const Loading: ActionIconStory = {
  render: args => (
    <ActionIcon {...args}>
      <IconSettings />
    </ActionIcon>
  ),
  args: {
    variety: "default",
    loading: true,
  },
};

export const Custom: ActionIconStory = {
  render: args => (
    <ActionIcon {...args}>
      <IconHeart />
    </ActionIcon>
  ),
  args: {
    variety: "custom",
    color: "red",
    variant: "filled",
  },
};
