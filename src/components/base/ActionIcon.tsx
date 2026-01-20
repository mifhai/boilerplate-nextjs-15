import { ActionIcon as MantineActionIcon } from "@mantine/core";

import { primaryColors, secondaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { ActionIconProps } from "@mantine/core";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type IButtonElement = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "style">;

interface IProps extends ActionIconProps, IButtonElement {
  variety?: "default" | "secondary" | "outline" | "subtle" | "custom";
  classnames?: {
    root?: string;
    icon?: string;
    loader?: string;
  };
  children?: ReactNode;
}

export const ActionIcon = (props: IProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { radius: "md" };

  switch (variety) {
    case "secondary":
      return (
        <MantineActionIcon
          {...base}
          color={secondaryColors[500]}
          classNames={{
            root: cn(rest.classnames?.root),
            icon: cn(rest.classnames?.icon),
            loader: cn(rest.classnames?.loader),
          }}
          {...rest}
        >
          {children}
        </MantineActionIcon>
      );

    case "outline":
      return (
        <MantineActionIcon
          {...base}
          variant="outline"
          color={primaryColors[600]}
          classNames={{
            root: cn(rest.classnames?.root),
            icon: cn(rest.classnames?.icon),
            loader: cn(rest.classnames?.loader),
          }}
          {...rest}
        >
          {children}
        </MantineActionIcon>
      );

    case "subtle":
      return (
        <MantineActionIcon
          {...base}
          variant="subtle"
          color={primaryColors[600]}
          classNames={{
            root: cn(rest.classnames?.root),
            icon: cn(rest.classnames?.icon),
            loader: cn(rest.classnames?.loader),
          }}
          {...rest}
        >
          {children}
        </MantineActionIcon>
      );

    case "custom":
      return (
        <MantineActionIcon {...base} {...rest}>
          {children}
        </MantineActionIcon>
      );

    case "default":
    default:
      return (
        <MantineActionIcon
          {...base}
          color={primaryColors[600]}
          classNames={{
            root: cn(rest.classnames?.root),
            icon: cn(rest.classnames?.icon),
            loader: cn(rest.classnames?.loader),
          }}
          {...rest}
        >
          {children}
        </MantineActionIcon>
      );
  }
};

ActionIcon.displayName = "ActionIcon";
