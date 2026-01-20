/* eslint-disable sonarjs/no-hardcoded-passwords */
import { PasswordInput as MantinePasswordInput } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { PasswordInputProps } from "@mantine/core";
import type { InputHTMLAttributes } from "react";

type IInputElement = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "style">;

interface IProps extends PasswordInputProps, IInputElement {
  variety?: "default" | "custom";
  classnames?: {
    root?: string;
    input?: string;
    label?: string;
    wrapper?: string;
    innerInput?: string;
    section?: string;
  };
}

const base = { radius: "md" };

export const PasswordInput = ({ ref, ...props }: IProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const { variety = "default", ...rest } = props;

  if (variety === "default") {
    return (
      <MantinePasswordInput
        {...base}
        ref={ref}
        classNames={{
          root: cn(rest.classnames?.root),
          input: cn("h-[2.75rem] text-base", rest.classnames?.input),
          label: cn("mb-1 text-base", rest.classnames?.label),
          wrapper: cn(rest.classnames?.wrapper),
          innerInput: cn(rest.classnames?.innerInput),
          section: cn(rest.classnames?.section),
          error: "text-xs",
        }}
        styles={{
          input: {
            "&:focus-within": {
              borderColor: primaryColors[500],
            },
          },
        }}
        {...rest}
      />
    );
  }

  if (variety === "custom") {
    return <MantinePasswordInput {...base} ref={ref} {...rest} />;
  }

  return null;
};

PasswordInput.displayName = "PasswordInput";
