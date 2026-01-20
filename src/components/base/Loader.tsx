import { Loader as MantineLoader } from "@mantine/core";

import { primaryColors, secondaryColors } from "@/configs/mantine-theme";

import type { LoaderProps } from "@mantine/core";

interface IProps extends LoaderProps {
  variety?: "default" | "secondary" | "custom";
}

export const Loader = (props: IProps) => {
  const { variety = "default", ...rest } = props;

  switch (variety) {
    case "secondary":
      return <MantineLoader color={secondaryColors[500]} {...rest} />;

    case "custom":
      return <MantineLoader {...rest} />;

    case "default":
    default:
      return <MantineLoader color={primaryColors[600]} {...rest} />;
  }
};

Loader.displayName = "Loader";
