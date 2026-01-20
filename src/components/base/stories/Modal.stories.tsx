import { useState } from "react";

import { Button } from "../Button";
import { Modal } from "../Modal";
import { TextInput } from "../TextInput";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type ModalStory = StoryObj<typeof Modal>;

export const Default: ModalStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Modal</Button>
        <Modal opened={opened} onClose={() => setOpened(false)} title="Modal Default">
          <p>Ini adalah konten dari modal default.</p>
        </Modal>
      </>
    );
  },
};

export const Centered: ModalStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Modal Centered</Button>
        <Modal variety="centered" opened={opened} onClose={() => setOpened(false)} title="Modal Centered">
          <p>Ini adalah konten dari modal centered.</p>
        </Modal>
      </>
    );
  },
};

export const Fullscreen: ModalStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Modal Fullscreen</Button>
        <Modal variety="fullscreen" opened={opened} onClose={() => setOpened(false)} title="Modal Fullscreen">
          <p>Ini adalah konten dari modal fullscreen.</p>
        </Modal>
      </>
    );
  },
};

export const WithForm: ModalStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Form Modal</Button>
        <Modal opened={opened} onClose={() => setOpened(false)} title="Form Pendaftaran">
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
        </Modal>
      </>
    );
  },
};

export const WithConfirmation: ModalStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button variety="reset" onClick={() => setOpened(true)}>
          Hapus Data
        </Button>
        <Modal opened={opened} onClose={() => setOpened(false)} title="Konfirmasi Hapus" size="sm">
          <p className="text-gray-600">Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.</p>
          <div className="mt-6 flex justify-end gap-2">
            <Button variety="secondary" onClick={() => setOpened(false)}>
              Batal
            </Button>
            <Button variety="reset" onClick={() => setOpened(false)}>
              Hapus
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const Custom: ModalStory = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Buka Modal Custom</Button>
        <Modal variety="custom" opened={opened} onClose={() => setOpened(false)} title="Modal Custom" size="lg">
          <p>Ini adalah konten dari modal custom.</p>
        </Modal>
      </>
    );
  },
};
