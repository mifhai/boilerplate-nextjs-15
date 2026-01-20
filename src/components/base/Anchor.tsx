import { Anchor as MantineAnchor } from "@mantine/core";

import { primaryColors, secondaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { AnchorProps } from "@mantine/core";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type IAnchorElement = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color" | "style">;

interface IProps extends AnchorProps, IAnchorElement {
  variety?: "default" | "secondary" | "underline" | "custom";
  classnames?: {
    root?: string;
  };
  children?: ReactNode;
}

export const Anchor = (props: IProps) => {
  const { variety = "default", children, ...rest } = props;

  switch (variety) {
    case "secondary":
      return (
        <MantineAnchor
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          styles={{
            root: {
              "color": secondaryColors[600],
              "&:hover": {
                color: secondaryColors[700],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineAnchor>
      );

    case "underline":
      return (
        <MantineAnchor
          underline="always"
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          styles={{
            root: {
              "color": primaryColors[700],
              "&:hover": {
                color: primaryColors[800],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineAnchor>
      );

    case "custom":
      return <MantineAnchor {...rest}>{children}</MantineAnchor>;

    case "default":
    default:
      return (
        <MantineAnchor
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          styles={{
            root: {
              "color": primaryColors[700],
              "&:hover": {
                color: primaryColors[800],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineAnchor>
      );
  }
};

Anchor.displayName = "Anchor";
