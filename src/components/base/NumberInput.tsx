import { NumberInput as MantineNumberInput } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { NumberInputProps } from "@mantine/core";

interface IProps extends NumberInputProps {
  variety?: "default" | "custom";
  classnames?: {
    root?: string;
    input?: string;
    label?: string;
    wrapper?: string;
    controls?: string;
    control?: string;
  };
}

const base = { radius: "md" };

export const NumberInput = ({ ref, ...props }: IProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const { variety = "default", ...rest } = props;

  if (variety === "default") {
    return (
      <MantineNumberInput
        {...base}
        ref={ref}
        classNames={{
          root: cn(rest.classnames?.root),
          input: cn("h-[2.75rem] text-base", rest.classnames?.input),
          label: cn("mb-1 text-base", rest.classnames?.label),
          wrapper: cn(rest.classnames?.wrapper),
          controls: cn(rest.classnames?.controls),
          control: cn(rest.classnames?.control),
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
    return <MantineNumberInput {...base} ref={ref} {...rest} />;
  }

  return null;
};

NumberInput.displayName = "NumberInput";
