import { Select as MantineSelect } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { SelectProps } from "@mantine/core";

interface IProps extends SelectProps {
  variety?: "default" | "custom";
  classnames?: {
    root?: string;
    input?: string;
    label?: string;
    wrapper?: string;
    dropdown?: string;
    option?: string;
  };
}

const base = { radius: "md" };

export const Select = ({ ref, ...props }: IProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const { variety = "default", ...rest } = props;

  if (variety === "default") {
    return (
      <MantineSelect
        {...base}
        ref={ref}
        classNames={{
          root: cn(rest.classnames?.root),
          input: cn("h-[2.75rem] text-base", rest.classnames?.input),
          label: cn("mb-1 text-base", rest.classnames?.label),
          wrapper: cn(rest.classnames?.wrapper),
          dropdown: cn(rest.classnames?.dropdown),
          option: cn(rest.classnames?.option),
          error: "text-xs",
        }}
        styles={{
          input: {
            "&:focus": {
              borderColor: primaryColors[500],
            },
          },
          option: {
            "&[data-selected]": {
              backgroundColor: primaryColors[600],
            },
            "&[data-hovered]": {
              backgroundColor: primaryColors[100],
            },
          },
        }}
        {...rest}
      />
    );
  }

  if (variety === "custom") {
    return <MantineSelect {...base} ref={ref} {...rest} />;
  }

  return null;
};

Select.displayName = "Select";
