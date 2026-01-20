import { Menu as MantineMenu } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { MenuDividerProps, MenuDropdownProps, MenuItemProps, MenuLabelProps, MenuProps, MenuTargetProps } from "@mantine/core";
import type { ReactNode } from "react";

interface IMenuProps extends MenuProps {
  variety?: "default" | "custom";
  classnames?: {
    dropdown?: string;
    item?: string;
    itemLabel?: string;
    itemSection?: string;
    label?: string;
    divider?: string;
  };
  children?: ReactNode;
}

interface IMenuTargetProps extends MenuTargetProps {
  children: ReactNode;
}

interface IMenuDropdownProps extends MenuDropdownProps {
  classnames?: {
    root?: string;
  };
  children?: ReactNode;
}

interface IMenuItemProps extends MenuItemProps {
  classnames?: {
    root?: string;
  };
  children?: ReactNode;
}

interface IMenuLabelProps extends MenuLabelProps {
  classnames?: {
    root?: string;
  };
  children?: ReactNode;
}

interface IMenuDividerProps extends MenuDividerProps {
  classnames?: {
    root?: string;
  };
}

export const Menu = (props: IMenuProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { radius: "md", shadow: "md" };

  switch (variety) {
    case "custom":
      return (
        <MantineMenu {...base} {...rest}>
          {children}
        </MantineMenu>
      );

    case "default":
    default:
      return (
        <MantineMenu
          {...base}
          classNames={{
            dropdown: cn(rest.classnames?.dropdown),
            item: cn(rest.classnames?.item),
            itemLabel: cn(rest.classnames?.itemLabel),
            itemSection: cn(rest.classnames?.itemSection),
            label: cn(rest.classnames?.label),
            divider: cn(rest.classnames?.divider),
          }}
          styles={{
            item: {
              "&[data-hovered]": {
                backgroundColor: primaryColors[100],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineMenu>
      );
  }
};

Menu.displayName = "Menu";

// Menu Target Component
const Target = (props: IMenuTargetProps) => {
  const { children, ...rest } = props;

  return <MantineMenu.Target {...rest}>{children}</MantineMenu.Target>;
};

Target.displayName = "Menu.Target";

// Menu Dropdown Component
const Dropdown = (props: IMenuDropdownProps) => {
  const { children, ...rest } = props;

  return (
    <MantineMenu.Dropdown
      classNames={{
        dropdown: cn(rest.classnames?.root),
      }}
      {...rest}
    >
      {children}
    </MantineMenu.Dropdown>
  );
};

Dropdown.displayName = "Menu.Dropdown";

// Menu Item Component
const Item = (props: IMenuItemProps) => {
  const { children, ...rest } = props;

  return (
    <MantineMenu.Item
      classNames={{
        item: cn(rest.classnames?.root),
      }}
      {...rest}
    >
      {children}
    </MantineMenu.Item>
  );
};

Item.displayName = "Menu.Item";

// Menu Label Component
const Label = (props: IMenuLabelProps) => {
  const { children, ...rest } = props;

  return (
    <MantineMenu.Label
      classNames={{
        label: cn(rest.classnames?.root),
      }}
      {...rest}
    >
      {children}
    </MantineMenu.Label>
  );
};

Label.displayName = "Menu.Label";

// Menu Divider Component
const Divider = (props: IMenuDividerProps) => {
  const { ...rest } = props;

  return (
    <MantineMenu.Divider
      classNames={{
        divider: cn(rest.classnames?.root),
      }}
      {...rest}
    />
  );
};

Divider.displayName = "Menu.Divider";

Menu.Target = Target;
Menu.Dropdown = Dropdown;
Menu.Item = Item;
Menu.Label = Label;
Menu.Divider = Divider;
