import { AvatarGroup, Avatar as MantineAvatar } from "@mantine/core";

import { primaryColors } from "@/configs/mantine-theme";
import { cn } from "@/libs/tailwind-clsx";

import type { AvatarGroupProps, AvatarProps } from "@mantine/core";
import type { ReactNode } from "react";

interface IProps extends AvatarProps {
  variety?: "default" | "outline" | "custom";
  classnames?: {
    root?: string;
    image?: string;
    placeholder?: string;
  };
}

interface IGroupProps extends AvatarGroupProps {
  classnames?: {
    group?: string;
  };
  children?: ReactNode;
}

export const Avatar = (props: IProps) => {
  const { variety = "default", ...rest } = props;

  const base = { radius: "xl" };

  switch (variety) {
    case "outline":
      return (
        <MantineAvatar
          {...base}
          classNames={{
            root: cn("border-2", rest.classnames?.root),
            image: cn(rest.classnames?.image),
            placeholder: cn(rest.classnames?.placeholder),
          }}
          styles={{
            root: {
              borderColor: primaryColors[600],
            },
            placeholder: {
              backgroundColor: primaryColors[100],
              color: primaryColors[700],
            },
          }}
          {...rest}
        />
      );

    case "custom":
      return <MantineAvatar {...base} {...rest} />;

    case "default":
    default:
      return (
        <MantineAvatar
          {...base}
          classNames={{
            root: cn(rest.classnames?.root),
            image: cn(rest.classnames?.image),
            placeholder: cn(rest.classnames?.placeholder),
          }}
          styles={{
            placeholder: {
              backgroundColor: primaryColors[100],
              color: primaryColors[700],
            },
          }}
          {...rest}
        />
      );
  }
};

Avatar.displayName = "Avatar";

// Avatar Group Component
const Group = (props: IGroupProps) => {
  const { children, ...rest } = props;

  return (
    <AvatarGroup
      classNames={{
        group: cn(rest.classnames?.group),
      }}
      {...rest}
    >
      {children}
    </AvatarGroup>
  );
};

Group.displayName = "Avatar.Group";

Avatar.Group = Group;
