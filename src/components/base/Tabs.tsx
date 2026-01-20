import { Tabs as MantineTabs } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { TabsListProps, TabsPanelProps, TabsProps, TabsTabProps } from "@mantine/core";
import type { ReactNode } from "react";

interface ITabsProps extends TabsProps {
  variety?: "default" | "outline" | "pills" | "custom";
  classnames?: {
    root?: string;
    list?: string;
    tab?: string;
    panel?: string;
  };
  children?: ReactNode;
}

interface ITabsListProps extends TabsListProps {
  classnames?: {
    root?: string;
  };
  children: ReactNode;
}

interface ITabsTabProps extends TabsTabProps {
  classnames?: {
    root?: string;
  };
  children: ReactNode;
}

interface ITabsPanelProps extends TabsPanelProps {
  classnames?: {
    root?: string;
  };
  children: ReactNode;
}

export const Tabs = (props: ITabsProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { radius: "md" };

  switch (variety) {
    case "outline":
      return (
        <MantineTabs
          {...base}
          variant="outline"
          classNames={{
            root: cn(rest.classnames?.root),
            list: cn(rest.classnames?.list),
            tab: cn(rest.classnames?.tab),
            panel: cn("pt-4", rest.classnames?.panel),
          }}
          styles={{
            tab: {
              "&[data-active]": {
                borderColor: primaryColors[600],
                color: primaryColors[700],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineTabs>
      );

    case "pills":
      return (
        <MantineTabs
          {...base}
          variant="pills"
          classNames={{
            root: cn(rest.classnames?.root),
            list: cn(rest.classnames?.list),
            tab: cn(rest.classnames?.tab),
            panel: cn("pt-4", rest.classnames?.panel),
          }}
          styles={{
            tab: {
              "&[data-active]": {
                backgroundColor: primaryColors[600],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineTabs>
      );

    case "custom":
      return (
        <MantineTabs {...base} {...rest}>
          {children}
        </MantineTabs>
      );

    case "default":
    default:
      return (
        <MantineTabs
          {...base}
          classNames={{
            root: cn(rest.classnames?.root),
            list: cn(rest.classnames?.list),
            tab: cn(rest.classnames?.tab),
            panel: cn("pt-4", rest.classnames?.panel),
          }}
          styles={{
            tab: {
              "&[data-active]": {
                borderColor: primaryColors[600],
                color: primaryColors[700],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineTabs>
      );
  }
};

Tabs.displayName = "Tabs";

// Tabs List Component
const List = (props: ITabsListProps) => {
  const { children, classnames, ...rest } = props;

  return (
    <MantineTabs.List
      classNames={{
        list: cn(classnames?.root),
      }}
      {...rest}
    >
      {children}
    </MantineTabs.List>
  );
};

List.displayName = "Tabs.List";

// Tabs Tab Component
const Tab = (props: ITabsTabProps) => {
  const { children, classnames, ...rest } = props;

  return (
    <MantineTabs.Tab
      classNames={{
        tab: cn(classnames?.root),
      }}
      {...rest}
    >
      {children}
    </MantineTabs.Tab>
  );
};

Tab.displayName = "Tabs.Tab";

// Tabs Panel Component
const Panel = (props: ITabsPanelProps) => {
  const { children, classnames, ...rest } = props;

  return (
    <MantineTabs.Panel
      classNames={{
        panel: cn(classnames?.root),
      }}
      {...rest}
    >
      {children}
    </MantineTabs.Panel>
  );
};

Panel.displayName = "Tabs.Panel";

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
