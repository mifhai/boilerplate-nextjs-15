import { CardSection, Card as MantineCard } from "@mantine/core";

import { cn } from "@/libs/tailwind-clsx";

import type { CardProps, CardSectionProps } from "@mantine/core";
import type { ReactNode } from "react";

interface IProps extends CardProps {
  variety?: "default" | "bordered" | "elevated" | "custom";
  classnames?: {
    root?: string;
  };
  children?: ReactNode;
}

interface ISectionProps extends CardSectionProps {
  classnames?: {
    root?: string;
  };
  children?: ReactNode;
}

export const Card = (props: IProps) => {
  const { variety = "default", children, ...rest } = props;

  const base = { radius: "md", padding: "lg" };

  switch (variety) {
    case "bordered":
      return (
        <MantineCard
          {...base}
          withBorder
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          {...rest}
        >
          {children}
        </MantineCard>
      );

    case "elevated":
      return (
        <MantineCard
          {...base}
          shadow="sm"
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          {...rest}
        >
          {children}
        </MantineCard>
      );

    case "custom":
      return (
        <MantineCard {...base} {...rest}>
          {children}
        </MantineCard>
      );

    case "default":
    default:
      return (
        <MantineCard
          {...base}
          shadow="xs"
          withBorder
          classNames={{
            root: cn(rest.classnames?.root),
          }}
          {...rest}
        >
          {children}
        </MantineCard>
      );
  }
};

Card.displayName = "Card";

// Card Section Component
const Section = (props: ISectionProps) => {
  const { children, ...rest } = props;

  return (
    <CardSection
      classNames={{
        section: cn(rest.classnames?.root),
      }}
      {...rest}
    >
      {children}
    </CardSection>
  );
};

Section.displayName = "Card.Section";

Card.Section = Section;
