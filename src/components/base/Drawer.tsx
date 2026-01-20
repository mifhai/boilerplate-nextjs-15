import { Drawer as MantineDrawer } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { DrawerProps } from "@mantine/core";
import type { ReactNode } from "react";

interface IProps extends DrawerProps {
  variety?: "default" | "right" | "bottom" | "custom";
  classnames?: {
    root?: string;
    header?: string;
    title?: string;
    body?: string;
    content?: string;
    overlay?: string;
    close?: string;
  };
  children?: ReactNode;
}

export const Drawer = (props: IProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { padding: "lg" };

  switch (variety) {
    case "right":
      return (
        <MantineDrawer
          {...base}
          position="right"
          classNames={{
            root: cn(rest.classnames?.root),
            header: cn("border-b pb-3", rest.classnames?.header),
            title: cn("text-lg font-semibold", rest.classnames?.title),
            body: cn("pt-4", rest.classnames?.body),
            content: cn(rest.classnames?.content),
            overlay: cn(rest.classnames?.overlay),
            close: cn(rest.classnames?.close),
          }}
          styles={{
            close: {
              "&:hover": {
                backgroundColor: primaryColors[100],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineDrawer>
      );

    case "bottom":
      return (
        <MantineDrawer
          {...base}
          position="bottom"
          classNames={{
            root: cn(rest.classnames?.root),
            header: cn("border-b pb-3", rest.classnames?.header),
            title: cn("text-lg font-semibold", rest.classnames?.title),
            body: cn("pt-4", rest.classnames?.body),
            content: cn(rest.classnames?.content),
            overlay: cn(rest.classnames?.overlay),
            close: cn(rest.classnames?.close),
          }}
          styles={{
            close: {
              "&:hover": {
                backgroundColor: primaryColors[100],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineDrawer>
      );

    case "custom":
      return (
        <MantineDrawer {...base} {...rest}>
          {children}
        </MantineDrawer>
      );

    case "default":
    default:
      return (
        <MantineDrawer
          {...base}
          position="left"
          classNames={{
            root: cn(rest.classnames?.root),
            header: cn("border-b pb-3", rest.classnames?.header),
            title: cn("text-lg font-semibold", rest.classnames?.title),
            body: cn("pt-4", rest.classnames?.body),
            content: cn(rest.classnames?.content),
            overlay: cn(rest.classnames?.overlay),
            close: cn(rest.classnames?.close),
          }}
          styles={{
            close: {
              "&:hover": {
                backgroundColor: primaryColors[100],
              },
            },
          }}
          {...rest}
        >
          {children}
        </MantineDrawer>
      );
  }
};

Drawer.displayName = "Drawer";
