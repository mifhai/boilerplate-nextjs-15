import { Anchor } from "../Anchor";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Anchor",
  component: Anchor,
} satisfies Meta<typeof Anchor>;

export default meta;
type AnchorStory = StoryObj<typeof meta>;

export const Default: AnchorStory = {
  args: {
    variety: "default",
    children: "Link Default",
    href: "#",
  },
};

export const Secondary: AnchorStory = {
  args: {
    variety: "secondary",
    children: "Link Secondary",
    href: "#",
  },
};

export const Underline: AnchorStory = {
  args: {
    variety: "underline",
    children: "Link Underline",
    href: "#",
  },
};

export const AllVariants: AnchorStory = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Anchor variety="default" href="#">
        Default Link
      </Anchor>
      <Anchor variety="secondary" href="#">
        Secondary Link
      </Anchor>
      <Anchor variety="underline" href="#">
        Underline Link
      </Anchor>
    </div>
  ),
};

export const InText: AnchorStory = {
  render: () => (
    <p>
      Ini adalah contoh teks dengan
      {" "}
      <Anchor href="#" variety="default">
        link di dalamnya
      </Anchor>
      {" "}
      yang dapat diklik.
    </p>
  ),
};

export const ExternalLink: AnchorStory = {
  args: {
    variety: "default",
    children: "Buka Google",
    href: "https://google.com",
    target: "_blank",
  },
};

export const Sizes: AnchorStory = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Anchor href="#" size="xs">
        Extra Small Link
      </Anchor>
      <Anchor href="#" size="sm">
        Small Link
      </Anchor>
      <Anchor href="#" size="md">
        Medium Link
      </Anchor>
      <Anchor href="#" size="lg">
        Large Link
      </Anchor>
      <Anchor href="#" size="xl">
        Extra Large Link
      </Anchor>
    </div>
  ),
};

export const Custom: AnchorStory = {
  args: {
    variety: "custom",
    children: "Custom Link",
    href: "#",
    c: "grape",
  },
};
