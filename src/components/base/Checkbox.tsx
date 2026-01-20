import { Checkbox as MantineCheckbox } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { CheckboxProps } from "@mantine/core";

interface IProps extends CheckboxProps {
  variety?: "default" | "custom";
  classnames?: {
    root?: string;
    input?: string;
    label?: string;
    icon?: string;
    body?: string;
  };
}

export const Checkbox = ({ ref, ...props }: IProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const { variety = "default", ...rest } = props;

  if (variety === "default") {
    return (
      <MantineCheckbox
        ref={ref}
        radius="sm"
        classNames={{
          root: cn(rest.classnames?.root),
          input: cn(rest.classnames?.input),
          label: cn("text-base", rest.classnames?.label),
          icon: cn(rest.classnames?.icon),
          body: cn(rest.classnames?.body),
        }}
        styles={{
          input: {
            "&:checked": {
              backgroundColor: primaryColors[600],
              borderColor: primaryColors[600],
            },
          },
        }}
        {...rest}
      />
    );
  }

  if (variety === "custom") {
    return <MantineCheckbox ref={ref} {...rest} />;
  }

  return null;
};

Checkbox.displayName = "Checkbox";
