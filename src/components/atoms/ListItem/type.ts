import { ReactElement, ReactNode } from "react";

type TypeAndDescriptionType =
  | {
      description?: string;
      href: string;
      onClick?: never;
    }
  | {
      description?: never;
      href?: never;
      onClick: () => void;
    };

export type ListItemProps = {
  hasChevron?: boolean;
  isDisabled?: boolean;
  icon?: ReactElement;
  selectedIcon?: ReactElement;
  title: ReactNode;
  isSelected?: boolean;
  size?: "small" | "medium" | "large";
} & TypeAndDescriptionType;
