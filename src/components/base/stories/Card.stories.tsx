import { Button } from "../Button";
import { Card } from "../Card";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type CardStory = StoryObj<typeof meta>;

export const Default: CardStory = {
  render: args => (
    <div className="max-w-[350px]">
      <Card {...args}>
        <h3 className="mb-2 text-lg font-semibold">Judul Card</h3>
        <p className="text-gray-600">Ini adalah konten dari card default dengan shadow dan border.</p>
      </Card>
    </div>
  ),
  args: {
    variety: "default",
  },
};

export const Bordered: CardStory = {
  render: args => (
    <div className="max-w-[350px]">
      <Card {...args}>
        <h3 className="mb-2 text-lg font-semibold">Judul Card</h3>
        <p className="text-gray-600">Ini adalah konten dari card dengan border saja tanpa shadow.</p>
      </Card>
    </div>
  ),
  args: {
    variety: "bordered",
  },
};

export const Elevated: CardStory = {
  render: args => (
    <div className="max-w-[350px]">
      <Card {...args}>
        <h3 className="mb-2 text-lg font-semibold">Judul Card</h3>
        <p className="text-gray-600">Ini adalah konten dari card dengan shadow tanpa border.</p>
      </Card>
    </div>
  ),
  args: {
    variety: "elevated",
  },
};

export const WithSection: CardStory = {
  render: () => (
    <div className="max-w-[350px]">
      <Card>
        <Card.Section inheritPadding py="md" withBorder>
          <h3 className="text-lg font-semibold">Header Section</h3>
        </Card.Section>

        <p className="py-4 text-gray-600">Konten utama dari card berada di sini.</p>

        <Card.Section inheritPadding py="md" withBorder>
          <div className="flex justify-end gap-2">
            <Button variety="secondary">Batal</Button>
            <Button variety="default">Simpan</Button>
          </div>
        </Card.Section>
      </Card>
    </div>
  ),
};

export const ProductCard: CardStory = {
  render: () => (
    <div className="max-w-[300px]">
      <Card padding="lg">
        <Card.Section>
          <div className="flex h-[160px] items-center justify-center bg-gray-100">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </Card.Section>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Nama Produk</h3>
          <p className="mt-1 text-sm text-gray-500">Deskripsi singkat produk</p>
          <p className="mt-2 text-xl font-bold text-primary-600">Rp 150.000</p>

          <Button variety="default" fullWidth className="mt-4">
            Tambah ke Keranjang
          </Button>
        </div>
      </Card>
    </div>
  ),
};

export const Custom: CardStory = {
  render: args => (
    <div className="max-w-[350px]">
      <Card {...args}>
        <h3 className="mb-2 text-lg font-semibold">Card Custom</h3>
        <p className="text-gray-600">Konten card custom.</p>
      </Card>
    </div>
  ),
  args: {
    variety: "custom",
    shadow: "xl",
    withBorder: true,
  },
};
