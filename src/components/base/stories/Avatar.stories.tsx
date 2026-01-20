import { Avatar } from "../Avatar";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type AvatarStory = StoryObj<typeof meta>;

export const Default: AvatarStory = {
  args: {
    variety: "default",
    src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    alt: "User Avatar",
  },
};

export const Outline: AvatarStory = {
  args: {
    variety: "outline",
    src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    alt: "User Avatar",
  },
};

export const WithInitials: AvatarStory = {
  args: {
    variety: "default",
    children: "JD",
  },
};

export const Sizes: AvatarStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" />
      <Avatar size="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" />
      <Avatar size="md" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png" />
      <Avatar size="lg" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png" />
      <Avatar size="xl" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png" />
    </div>
  ),
};

export const Group: AvatarStory = {
  render: () => (
    <Avatar.Group spacing="sm">
      <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" />
      <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" />
      <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  ),
};

export const Placeholder: AvatarStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar />
      <Avatar>AB</Avatar>
      <Avatar>CD</Avatar>
    </div>
  ),
};

export const AllVariants: AvatarStory = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 font-medium">Default:</p>
        <div className="flex items-center gap-4">
          <Avatar variety="default" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" />
          <Avatar variety="default">JD</Avatar>
          <Avatar variety="default" />
        </div>
      </div>
      <div>
        <p className="mb-2 font-medium">Outline:</p>
        <div className="flex items-center gap-4">
          <Avatar variety="outline" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" />
          <Avatar variety="outline">AB</Avatar>
          <Avatar variety="outline" />
        </div>
      </div>
    </div>
  ),
};

export const Custom: AvatarStory = {
  args: {
    variety: "custom",
    src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    radius: "sm",
  },
};
