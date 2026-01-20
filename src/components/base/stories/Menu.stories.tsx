import { Button } from "../Button";
import { Menu } from "../Menu";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Base / Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type MenuStory = StoryObj<typeof meta>;

export const Default: MenuStory = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button>Open Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Messages</Menu.Item>
        <Menu.Item>Gallery</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item color="red">Delete my account</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const WithIcons: MenuStory = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button>User Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item>👤 Profile</Menu.Item>
        <Menu.Item>⚙️ Settings</Menu.Item>
        <Menu.Item>💳 Billing</Menu.Item>
        <Menu.Divider />
        <Menu.Item>❓ Help</Menu.Item>
        <Menu.Item color="red">🚪 Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const Positions: MenuStory = {
  render: () => (
    <div className="flex gap-4 p-8">
      <Menu position="bottom">
        <Menu.Target>
          <Button variety="outline">Bottom</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu position="top">
        <Menu.Target>
          <Button variety="outline">Top</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu position="left">
        <Menu.Target>
          <Button variety="outline">Left</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu position="right">
        <Menu.Target>
          <Button variety="outline">Right</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  ),
};

export const WithDisabledItems: MenuStory = {
  render: () => (
    <Menu>
      <Menu.Target>
        <Button>Open Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Active Item</Menu.Item>
        <Menu.Item disabled>Disabled Item</Menu.Item>
        <Menu.Item>Another Active Item</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const OpenOnHover: MenuStory = {
  render: () => (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <Button>Hover to open</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const Custom: MenuStory = {
  render: () => (
    <Menu variety="custom">
      <Menu.Target>
        <Button>Custom Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Custom Item 1</Menu.Item>
        <Menu.Item>Custom Item 2</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};
