import { Alert } from "../Alert";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type AlertStory = StoryObj<typeof meta>;

export const Default: AlertStory = {
  render: args => (
    <div className="max-w-[500px]">
      <Alert {...args} />
    </div>
  ),
  args: {
    variety: "default",
    title: "Informasi",
    children: "Ini adalah pesan informasi default.",
  },
};

export const Success: AlertStory = {
  render: args => (
    <div className="max-w-[500px]">
      <Alert {...args} />
    </div>
  ),
  args: {
    variety: "success",
    title: "Berhasil!",
    children: "Data berhasil disimpan ke dalam sistem.",
  },
};

export const Warning: AlertStory = {
  render: args => (
    <div className="max-w-[500px]">
      <Alert {...args} />
    </div>
  ),
  args: {
    variety: "warning",
    title: "Perhatian",
    children: "Pastikan data yang Anda masukkan sudah benar sebelum melanjutkan.",
  },
};

export const ErrorVariant: AlertStory = {
  render: args => (
    <div className="max-w-[500px]">
      <Alert {...args} />
    </div>
  ),
  args: {
    variety: "error",
    title: "Terjadi Kesalahan",
    children: "Gagal menyimpan data. Silakan coba lagi.",
  },
};

export const Info: AlertStory = {
  render: args => (
    <div className="max-w-[500px]">
      <Alert {...args} />
    </div>
  ),
  args: {
    variety: "info",
    title: "Info",
    children: "Sistem akan mengalami maintenance pada tanggal 25 Januari 2026.",
  },
};

export const AllVariants: AlertStory = {
  render: () => (
    <div className="flex max-w-[500px] flex-col gap-4">
      <Alert variety="default" title="Default">
        Ini adalah alert default.
      </Alert>
      <Alert variety="success" title="Success">
        Ini adalah alert success.
      </Alert>
      <Alert variety="warning" title="Warning">
        Ini adalah alert warning.
      </Alert>
      <Alert variety="error" title="Error">
        Ini adalah alert error.
      </Alert>
      <Alert variety="info" title="Info">
        Ini adalah alert info.
      </Alert>
    </div>
  ),
};

export const WithCloseButton: AlertStory = {
  render: args => (
    <div className="max-w-[500px]">
      <Alert {...args} />
    </div>
  ),
  args: {
    variety: "info",
    title: "Info",
    children: "Klik tombol X untuk menutup alert ini.",
    withCloseButton: true,
  },
};

export const Custom: AlertStory = {
  render: args => (
    <div className="max-w-[500px]">
      <Alert {...args} />
    </div>
  ),
  args: {
    variety: "custom",
    title: "Alert Custom",
    children: "Ini adalah alert dengan style custom.",
    color: "grape",
  },
};
