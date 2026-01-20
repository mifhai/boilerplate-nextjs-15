import { Switch as MantineSwitch } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { SwitchProps } from "@mantine/core";

interface IProps extends SwitchProps {
  variety?: "default" | "custom";
  classnames?: {
    root?: string;
    track?: string;
    thumb?: string;
    label?: string;
    body?: string;
  };
}

export const Switch = ({ ref, ...props }: IProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const { variety = "default", ...rest } = props;

  if (variety === "default") {
    return (
      <MantineSwitch
        ref={ref}
        classNames={{
          root: cn(rest.classnames?.root),
          track: cn(rest.classnames?.track),
          thumb: cn(rest.classnames?.thumb),
          label: cn("text-base", rest.classnames?.label),
          body: cn(rest.classnames?.body),
        }}
        styles={{
          track: {
            "&[data-checked]": {
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
    return <MantineSwitch ref={ref} {...rest} />;
  }

  return null;
};

Switch.displayName = "Switch";
