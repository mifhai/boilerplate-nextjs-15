import { useState } from "react";

import { Pagination } from "../Pagination";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Pagination",
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type PaginationStory = StoryObj<typeof Pagination>;

export const Default: PaginationStory = {
  args: {
    variety: "default",
    total: 10,
  },
};

export const Outline: PaginationStory = {
  args: {
    variety: "outline",
    total: 10,
  },
};

export const Controlled: PaginationStory = {
  render: () => {
    const [activePage, setPage] = useState(1);

    return (
      <div>
        <p className="mb-4">
          Halaman aktif:
          {activePage}
        </p>
        <Pagination total={10} value={activePage} onChange={setPage} />
      </div>
    );
  },
};

export const WithSiblings: PaginationStory = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm">
          siblings=
          {1}
          {" "}
          (default)
        </p>
        <Pagination total={20} siblings={1} defaultValue={10} />
      </div>
      <div>
        <p className="mb-2 text-sm">
          siblings=
          {2}
        </p>
        <Pagination total={20} siblings={2} defaultValue={10} />
      </div>
      <div>
        <p className="mb-2 text-sm">
          siblings=
          {3}
        </p>
        <Pagination total={20} siblings={3} defaultValue={10} />
      </div>
    </div>
  ),
};

export const WithBoundaries: PaginationStory = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm">
          boundaries=
          {1}
          {" "}
          (default)
        </p>
        <Pagination total={20} boundaries={1} defaultValue={10} />
      </div>
      <div>
        <p className="mb-2 text-sm">
          boundaries=
          {2}
        </p>
        <Pagination total={20} boundaries={2} defaultValue={10} />
      </div>
      <div>
        <p className="mb-2 text-sm">
          boundaries=
          {3}
        </p>
        <Pagination total={20} boundaries={3} defaultValue={10} />
      </div>
    </div>
  ),
};

export const Sizes: PaginationStory = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Pagination total={10} size="xs" />
      <Pagination total={10} size="sm" />
      <Pagination total={10} size="md" />
      <Pagination total={10} size="lg" />
      <Pagination total={10} size="xl" />
    </div>
  ),
};

export const WithEdges: PaginationStory = {
  args: {
    variety: "default",
    total: 10,
    withEdges: true,
  },
};

export const Disabled: PaginationStory = {
  args: {
    variety: "default",
    total: 10,
    disabled: true,
  },
};

export const Custom: PaginationStory = {
  args: {
    variety: "custom",
    total: 10,
    color: "grape",
  },
};
