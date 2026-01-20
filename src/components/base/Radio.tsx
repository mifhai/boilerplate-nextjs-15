import { Radio as MantineRadio } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { RadioGroupProps, RadioProps } from "@mantine/core";

interface IRadioProps extends RadioProps {
  variety?: "default" | "custom";
  classnames?: {
    root?: string;
    radio?: string;
    label?: string;
    icon?: string;
    body?: string;
  };
}

interface IRadioGroupProps extends RadioGroupProps {
  variety?: "default" | "custom";
  classnames?: {
    root?: string;
    label?: string;
    error?: string;
  };
}

export const Radio = ({ ref, ...props }: IRadioProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const { variety = "default", ...rest } = props;

  if (variety === "default") {
    return (
      <MantineRadio
        ref={ref}
        classNames={{
          root: cn(rest.classnames?.root),
          radio: cn(rest.classnames?.radio),
          label: cn("text-base", rest.classnames?.label),
          icon: cn(rest.classnames?.icon),
          body: cn(rest.classnames?.body),
        }}
        styles={{
          radio: {
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
    return <MantineRadio ref={ref} {...rest} />;
  }

  return null;
};

Radio.displayName = "Radio";

export const RadioGroup = (props: IRadioGroupProps) => {
  const { variety = "default", children, ...rest } = props;

  if (variety === "default") {
    return (
      <MantineRadio.Group
        classNames={{
          root: cn(rest.classnames?.root),
          label: cn("mb-2 text-base font-medium", rest.classnames?.label),
          error: cn("text-xs", rest.classnames?.error),
        }}
        {...rest}
      >
        {children}
      </MantineRadio.Group>
    );
  }

  if (variety === "custom") {
    return <MantineRadio.Group {...rest}>{children}</MantineRadio.Group>;
  }

  return null;
};

RadioGroup.displayName = "RadioGroup";
