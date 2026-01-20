import { Pagination as MantinePagination } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { PaginationProps } from "@mantine/core";

interface IProps extends PaginationProps {
  variety?: "default" | "outline" | "custom";
  classnames?: {
    root?: string;
    control?: string;
    dots?: string;
  };
}

export const Pagination = (props: IProps) => {
  const { variety = "default", ...rest } = props;

  const base = { radius: "md" };

  switch (variety) {
    case "outline":
      return (
        <MantinePagination
          {...base}
          classNames={{
            root: cn(rest.classnames?.root),
            control: cn(rest.classnames?.control),
            dots: cn(rest.classnames?.dots),
          }}
          styles={{
            control: {
              "&[data-active]": {
                backgroundColor: "transparent",
                borderColor: primaryColors[600],
                color: primaryColors[700],
              },
              "&:hover:not([data-active])": {
                backgroundColor: primaryColors[100],
              },
            },
          }}
          {...rest}
        />
      );

    case "custom":
      return <MantinePagination {...base} {...rest} />;

    case "default":
    default:
      return (
        <MantinePagination
          {...base}
          classNames={{
            root: cn(rest.classnames?.root),
            control: cn(rest.classnames?.control),
            dots: cn(rest.classnames?.dots),
          }}
          styles={{
            control: {
              "&[data-active]": {
                backgroundColor: primaryColors[600],
              },
              "&:hover:not([data-active])": {
                backgroundColor: primaryColors[100],
              },
            },
          }}
          {...rest}
        />
      );
  }
};

Pagination.displayName = "Pagination";
