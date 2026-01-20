import { Badge as MantineBadge } from "@mantine/core";

import { primaryColors, secondaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { BadgeProps } from "@mantine/core";
import type { ReactNode } from "react";

interface IProps extends BadgeProps {
  variety?: "default" | "secondary" | "outline" | "success" | "warning" | "error" | "custom";
  classnames?: {
    root?: string;
    label?: string;
    section?: string;
  };
  children?: ReactNode;
}

export const Badge = (props: IProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { radius: "sm" };

  switch (variety) {
    case "secondary":
      return (
        <MantineBadge
          {...base}
          color={secondaryColors[500]}
          classNames={{
            root: cn(rest.classnames?.root),
            label: cn(rest.classnames?.label),
            section: cn(rest.classnames?.section),
          }}
          {...rest}
        >
          {children}
        </MantineBadge>
      );

    case "outline":
      return (
        <MantineBadge
          {...base}
          variant="outline"
          color={primaryColors[600]}
          classNames={{
            root: cn(rest.classnames?.root),
            label: cn(rest.classnames?.label),
            section: cn(rest.classnames?.section),
          }}
          {...rest}
        >
          {children}
        </MantineBadge>
      );

    case "success":
      return (
        <MantineBadge
          {...base}
          color="green"
          classNames={{
            root: cn(rest.classnames?.root),
            label: cn(rest.classnames?.label),
            section: cn(rest.classnames?.section),
          }}
          {...rest}
        >
          {children}
        </MantineBadge>
      );

    case "warning":
      return (
        <MantineBadge
          {...base}
          color="yellow"
          classNames={{
            root: cn(rest.classnames?.root),
            label: cn(rest.classnames?.label),
            section: cn(rest.classnames?.section),
          }}
          {...rest}
        >
          {children}
        </MantineBadge>
      );

    case "error":
      return (
        <MantineBadge
          {...base}
          color="red"
          classNames={{
            root: cn(rest.classnames?.root),
            label: cn(rest.classnames?.label),
            section: cn(rest.classnames?.section),
          }}
          {...rest}
        >
          {children}
        </MantineBadge>
      );

    case "custom":
      return (
        <MantineBadge {...base} {...rest}>
          {children}
        </MantineBadge>
      );

    case "default":
    default:
      return (
        <MantineBadge
          {...base}
          color={primaryColors[600]}
          classNames={{
            root: cn(rest.classnames?.root),
            label: cn(rest.classnames?.label),
            section: cn(rest.classnames?.section),
          }}
          {...rest}
        >
          {children}
        </MantineBadge>
      );
  }
};

Badge.displayName = "Badge";
