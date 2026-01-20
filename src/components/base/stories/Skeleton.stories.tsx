import { Skeleton } from "../Skeleton";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Skeleton",
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type SkeletonStory = StoryObj<typeof meta>;

export const Default: SkeletonStory = {
  render: args => (
    <div className="max-w-[300px]">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    variety: "default",
    height: 50,
  },
};

export const Circle: SkeletonStory = {
  args: {
    variety: "circle",
    height: 50,
    width: 50,
  },
};

export const Text: SkeletonStory = {
  render: args => (
    <div className="max-w-[300px]">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    variety: "text",
  },
};

export const CardSkeleton: SkeletonStory = {
  render: () => (
    <div className="max-w-[300px] rounded-lg border p-4">
      <Skeleton height={160} />
      <Skeleton variety="text" mt="md" />
      <Skeleton variety="text" mt="xs" />
      <Skeleton variety="text" mt="xs" width="70%" />
    </div>
  ),
};

export const ProfileSkeleton: SkeletonStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton variety="circle" height={50} width={50} />
      <div className="flex-1">
        <Skeleton variety="text" width="60%" />
        <Skeleton variety="text" mt="xs" width="40%" />
      </div>
    </div>
  ),
};

export const ListSkeleton: SkeletonStory = {
  render: () => (
    <div className="flex max-w-[400px] flex-col gap-4">
      {[1, 2, 3].map(item => (
        <div key={item} className="flex items-center gap-4 rounded-lg border p-4">
          <Skeleton variety="circle" height={40} width={40} />
          <div className="flex-1">
            <Skeleton variety="text" width="70%" />
            <Skeleton variety="text" mt="xs" width="50%" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const TableSkeleton: SkeletonStory = {
  render: () => (
    <div className="w-full">
      <div className="mb-4 flex gap-4 border-b pb-2">
        <Skeleton variety="text" width="25%" />
        <Skeleton variety="text" width="25%" />
        <Skeleton variety="text" width="25%" />
        <Skeleton variety="text" width="25%" />
      </div>
      {[1, 2, 3, 4].map(row => (
        <div key={row} className="mb-3 flex gap-4">
          <Skeleton variety="text" width="25%" />
          <Skeleton variety="text" width="25%" />
          <Skeleton variety="text" width="25%" />
          <Skeleton variety="text" width="25%" />
        </div>
      ))}
    </div>
  ),
};

export const Custom: SkeletonStory = {
  render: args => (
    <div className="max-w-[300px]">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    variety: "custom",
    height: 100,
    radius: "xl",
  },
};
