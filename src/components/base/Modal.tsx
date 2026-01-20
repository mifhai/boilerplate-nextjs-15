import { Modal as MantineModal } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { ModalProps } from "@mantine/core";
import type { ReactNode } from "react";

interface IProps extends ModalProps {
  variety?: "default" | "centered" | "fullscreen" | "custom";
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

export const Modal = (props: IProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { radius: "md", padding: "lg" };

  switch (variety) {
    case "fullscreen":
      return (
        <MantineModal
          {...base}
          fullScreen
          classNames={{
            root: cn(rest.classnames?.root),
            header: cn("border-b pb-3", rest.classnames?.header),
            title: cn("text-lg font-semibold", rest.classnames?.title),
            body: cn("pt-4", rest.classnames?.body),
            content: cn(rest.classnames?.content),
            overlay: cn(rest.classnames?.overlay),
            close: cn(rest.classnames?.close),
          }}
          {...rest}
        >
          {children}
        </MantineModal>
      );

    case "custom":
      return (
        <MantineModal {...base} {...rest}>
          {children}
        </MantineModal>
      );

    case "centered":
    case "default":
    default:
      return (
        <MantineModal
          {...base}
          centered
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
        </MantineModal>
      );
  }
};

Modal.displayName = "Modal";
