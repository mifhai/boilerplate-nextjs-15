import { Tabs } from "../Tabs";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type TabsStory = StoryObj<typeof meta>;

export const Default: TabsStory = {
  render: () => (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  ),
};

export const Outline: TabsStory = {
  render: () => (
    <Tabs variety="outline" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  ),
};

export const Pills: TabsStory = {
  render: () => (
    <Tabs variety="pills" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  ),
};

export const Vertical: TabsStory = {
  render: () => (
    <Tabs orientation="vertical" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  ),
};

export const WithContent: TabsStory = {
  render: () => (
    <Tabs defaultValue="profile">
      <Tabs.List>
        <Tabs.Tab value="profile">Profil</Tabs.Tab>
        <Tabs.Tab value="security">Keamanan</Tabs.Tab>
        <Tabs.Tab value="notifications">Notifikasi</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="profile">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-lg font-semibold">Informasi Profil</h3>
          <p className="text-gray-600">Kelola informasi profil Anda seperti nama, email, dan foto profil.</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="security">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-lg font-semibold">Pengaturan Keamanan</h3>
          <p className="text-gray-600">Ubah password dan atur keamanan akun Anda.</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="notifications">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-lg font-semibold">Pengaturan Notifikasi</h3>
          <p className="text-gray-600">Kelola preferensi notifikasi email dan push notification.</p>
        </div>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const Custom: TabsStory = {
  render: () => (
    <Tabs variety="custom" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  ),
};
