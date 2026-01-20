import { useState } from "react";

import { Button } from "../Button";
import { Drawer } from "../Drawer";
import { TextInput } from "../TextInput";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type DrawerStory = StoryObj<typeof Drawer>;

export const Default: DrawerStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Drawer</Button>
        <Drawer opened={opened} onClose={() => setOpened(false)} title="Drawer Default">
          <p>Ini adalah konten dari drawer default (posisi kiri).</p>
        </Drawer>
      </>
    );
  },
};

export const Right: DrawerStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Drawer Kanan</Button>
        <Drawer variety="right" opened={opened} onClose={() => setOpened(false)} title="Drawer Kanan">
          <p>Ini adalah konten dari drawer posisi kanan.</p>
        </Drawer>
      </>
    );
  },
};

export const Bottom: DrawerStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Drawer Bawah</Button>
        <Drawer variety="bottom" opened={opened} onClose={() => setOpened(false)} title="Drawer Bawah">
          <p>Ini adalah konten dari drawer posisi bawah.</p>
        </Drawer>
      </>
    );
  },
};

export const WithForm: DrawerStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Form Drawer</Button>
        <Drawer variety="right" opened={opened} onClose={() => setOpened(false)} title="Form Pendaftaran" size="md">
          <div className="flex flex-col gap-4">
            <TextInput label="Nama Lengkap" placeholder="Masukkan nama lengkap" />
            <TextInput label="Email" placeholder="Masukkan email" />
            <TextInput label="No. Telepon" placeholder="Masukkan nomor telepon" />
            <div className="mt-4 flex justify-end gap-2">
              <Button variety="secondary" onClick={() => setOpened(false)}>
                Batal
              </Button>
              <Button variety="default" onClick={() => setOpened(false)}>
                Simpan
              </Button>
            </div>
          </div>
        </Drawer>
      </>
    );
  },
};

export const Sizes: DrawerStory = {
  render: () => {
    const [openedXs, setOpenedXs] = useState(false);
    const [openedSm, setOpenedSm] = useState(false);
    const [openedMd, setOpenedMd] = useState(false);
    const [openedLg, setOpenedLg] = useState(false);
    const [openedXl, setOpenedXl] = useState(false);

    return (
      <div className="flex flex-wrap gap-2">
        <Button variety="outline" onClick={() => setOpenedXs(true)}>
          XS
        </Button>
        <Button variety="outline" onClick={() => setOpenedSm(true)}>
          SM
        </Button>
        <Button variety="outline" onClick={() => setOpenedMd(true)}>
          MD
        </Button>
        <Button variety="outline" onClick={() => setOpenedLg(true)}>
          LG
        </Button>
        <Button variety="outline" onClick={() => setOpenedXl(true)}>
          XL
        </Button>

        <Drawer variety="right" opened={openedXs} onClose={() => setOpenedXs(false)} title="Drawer XS" size="xs">
          <p>Konten drawer ukuran XS</p>
        </Drawer>
        <Drawer variety="right" opened={openedSm} onClose={() => setOpenedSm(false)} title="Drawer SM" size="sm">
          <p>Konten drawer ukuran SM</p>
        </Drawer>
        <Drawer variety="right" opened={openedMd} onClose={() => setOpenedMd(false)} title="Drawer MD" size="md">
          <p>Konten drawer ukuran MD</p>
        </Drawer>
        <Drawer variety="right" opened={openedLg} onClose={() => setOpenedLg(false)} title="Drawer LG" size="lg">
          <p>Konten drawer ukuran LG</p>
        </Drawer>
        <Drawer variety="right" opened={openedXl} onClose={() => setOpenedXl(false)} title="Drawer XL" size="xl">
          <p>Konten drawer ukuran XL</p>
        </Drawer>
      </div>
    );
  },
};

export const Custom: DrawerStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Drawer Custom</Button>
        <Drawer variety="custom" opened={opened} onClose={() => setOpened(false)} title="Drawer Custom" position="right">
          <p>Ini adalah konten dari drawer custom.</p>
        </Drawer>
      </>
    );
  },
};
