import { Tooltip as MantineTooltip } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { TooltipProps } from "@mantine/core";
import type { ReactNode } from "react";

interface IProps extends TooltipProps {
  variety?: "default" | "primary" | "custom";
  classnames?: {
    tooltip?: string;
    arrow?: string;
  };
  children: ReactNode;
}

export const Tooltip = (props: IProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { radius: "md", withArrow: true };

  switch (variety) {
    case "primary":
      return (
        <MantineTooltip
          {...base}
          classNames={{
            tooltip: cn(rest.classnames?.tooltip),
            arrow: cn(rest.classnames?.arrow),
          }}
          styles={{
            tooltip: {
              backgroundColor: primaryColors[700],
              color: "white",
            },
            arrow: {
              backgroundColor: primaryColors[700],
            },
          }}
          {...rest}
        >
          {children}
        </MantineTooltip>
      );

    case "custom":
      return (
        <MantineTooltip {...base} {...rest}>
          {children}
        </MantineTooltip>
      );

    case "default":
    default:
      return (
        <MantineTooltip
          {...base}
          classNames={{
            tooltip: cn(rest.classnames?.tooltip),
            arrow: cn(rest.classnames?.arrow),
          }}
          {...rest}
        >
          {children}
        </MantineTooltip>
      );
  }
};

Tooltip.displayName = "Tooltip";
