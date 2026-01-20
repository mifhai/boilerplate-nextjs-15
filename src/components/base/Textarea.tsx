import { Textarea as MantineTextarea } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { TextareaProps } from "@mantine/core";
import type { TextareaHTMLAttributes } from "react";

type ITextareaElement = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "style">;

interface IProps extends TextareaProps, ITextareaElement {
  variety?: "default" | "custom";
  classnames?: {
    root?: string;
    input?: string;
    label?: string;
    wrapper?: string;
  };
}

const base = { radius: "md" };

export const Textarea = ({ ref, ...props }: IProps & { ref?: React.RefObject<HTMLTextAreaElement | null> }) => {
  const { variety = "default", ...rest } = props;

  if (variety === "default") {
    return (
      <MantineTextarea
        {...base}
        ref={ref}
        classNames={{
          root: cn(rest.classnames?.root),
          input: cn("min-h-[100px] text-base", rest.classnames?.input),
          label: cn("mb-1 text-base", rest.classnames?.label),
          wrapper: cn(rest.classnames?.wrapper),
          error: "text-xs",
        }}
        styles={{
          input: {
            "&:focus": {
              borderColor: primaryColors[500],
            },
          },
        }}
        {...rest}
      />
    );
  }

  if (variety === "custom") {
    return <MantineTextarea {...base} ref={ref} {...rest} />;
  }

  return null;
};

Textarea.displayName = "Textarea";
