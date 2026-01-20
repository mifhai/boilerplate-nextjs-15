import { Alert as MantineAlert } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { AlertProps } from "@mantine/core";
import type { ReactNode } from "react";

interface IProps extends AlertProps {
  variety?: "default" | "success" | "warning" | "error" | "info" | "custom";
  classnames?: {
    root?: string;
    wrapper?: string;
    title?: string;
    body?: string;
    message?: string;
    icon?: string;
    closeButton?: string;
  };
  children?: ReactNode;
}

export const Alert = (props: IProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { radius: "md" };

  switch (variety) {
    case "success":
      return (
        <MantineAlert
          {...base}
          color="green"
          classNames={{
            root: cn(rest.classnames?.root),
            wrapper: cn(rest.classnames?.wrapper),
            title: cn("font-semibold", rest.classnames?.title),
            body: cn(rest.classnames?.body),
            message: cn(rest.classnames?.message),
            icon: cn(rest.classnames?.icon),
            closeButton: cn(rest.classnames?.closeButton),
          }}
          {...rest}
        >
          {children}
        </MantineAlert>
      );

    case "warning":
      return (
        <MantineAlert
          {...base}
          color="yellow"
          classNames={{
            root: cn(rest.classnames?.root),
            wrapper: cn(rest.classnames?.wrapper),
            title: cn("font-semibold", rest.classnames?.title),
            body: cn(rest.classnames?.body),
            message: cn(rest.classnames?.message),
            icon: cn(rest.classnames?.icon),
            closeButton: cn(rest.classnames?.closeButton),
          }}
          {...rest}
        >
          {children}
        </MantineAlert>
      );

    case "error":
      return (
        <MantineAlert
          {...base}
          color="red"
          classNames={{
            root: cn(rest.classnames?.root),
            wrapper: cn(rest.classnames?.wrapper),
            title: cn("font-semibold", rest.classnames?.title),
            body: cn(rest.classnames?.body),
            message: cn(rest.classnames?.message),
            icon: cn(rest.classnames?.icon),
            closeButton: cn(rest.classnames?.closeButton),
          }}
          {...rest}
        >
          {children}
        </MantineAlert>
      );

    case "info":
      return (
        <MantineAlert
          {...base}
          color="blue"
          classNames={{
            root: cn(rest.classnames?.root),
            wrapper: cn(rest.classnames?.wrapper),
            title: cn("font-semibold", rest.classnames?.title),
            body: cn(rest.classnames?.body),
            message: cn(rest.classnames?.message),
            icon: cn(rest.classnames?.icon),
            closeButton: cn(rest.classnames?.closeButton),
          }}
          {...rest}
        >
          {children}
        </MantineAlert>
      );

    case "custom":
      return (
        <MantineAlert {...base} {...rest}>
          {children}
        </MantineAlert>
      );

    case "default":
    default:
      return (
        <MantineAlert
          {...base}
          color={primaryColors[600]}
          classNames={{
            root: cn(rest.classnames?.root),
            wrapper: cn(rest.classnames?.wrapper),
            title: cn("font-semibold", rest.classnames?.title),
            body: cn(rest.classnames?.body),
            message: cn(rest.classnames?.message),
            icon: cn(rest.classnames?.icon),
            closeButton: cn(rest.classnames?.closeButton),
          }}
          {...rest}
        >
          {children}
        </MantineAlert>
      );
  }
};

Alert.displayName = "Alert";
