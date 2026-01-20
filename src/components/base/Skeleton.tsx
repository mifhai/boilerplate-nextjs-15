import { Skeleton as MantineSkeleton } from "@mantine/core";

import { cn } from "@/libs/tailwind-clsx";

import type { SkeletonProps } from "@mantine/core";

interface IProps extends SkeletonProps {
  variety?: "default" | "circle" | "text" | "custom";
  classnames?: {
    root?: string;
  };
}

export const Skeleton = (props: IProps) => {
  const { variety = "default", ...rest } = props;

  const base = { radius: "md" };

  switch (variety) {
    case "circle":
      return (
        <MantineSkeleton
          {...base}
          circle
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          {...rest}
        />
      );

    case "text":
      return (
        <MantineSkeleton
          radius="sm"
          height={16}
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          {...rest}
        />
      );

    case "custom":
      return <MantineSkeleton {...rest} />;

    case "default":
    default:
      return (
        <MantineSkeleton
          {...base}
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          {...rest}
        />
      );
  }
};

Skeleton.displayName = "Skeleton";
