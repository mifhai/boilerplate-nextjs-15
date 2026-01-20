import { Loader } from "../Loader";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Loader",
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type LoaderStory = StoryObj<typeof meta>;

export const Default: LoaderStory = {
  args: {
    variety: "default",
  },
};

export const Secondary: LoaderStory = {
  args: {
    variety: "secondary",
  },
};

export const Sizes: LoaderStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loader size="xs" />
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
      <Loader size="xl" />
    </div>
  ),
};

export const Types: LoaderStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loader type="oval" />
      <Loader type="bars" />
      <Loader type="dots" />
    </div>
  ),
};

export const AllVariants: LoaderStory = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 font-medium">Default:</p>
        <div className="flex items-center gap-4">
          <Loader variety="default" type="oval" />
          <Loader variety="default" type="bars" />
          <Loader variety="default" type="dots" />
        </div>
      </div>
      <div>
        <p className="mb-2 font-medium">Secondary:</p>
        <div className="flex items-center gap-4">
          <Loader variety="secondary" type="oval" />
          <Loader variety="secondary" type="bars" />
          <Loader variety="secondary" type="dots" />
        </div>
      </div>
    </div>
  ),
};

export const Custom: LoaderStory = {
  args: {
    variety: "custom",
    color: "grape",
    size: "lg",
  },
};
