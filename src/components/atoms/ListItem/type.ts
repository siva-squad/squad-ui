import { ReactElement, ReactNode } from "react";

type TypeAndDescriptionType =
  | {
      size?: "large";
      description?: string;
      href: string;
      onClick?: never;
    }
  | {
      size?: "medium" | "small";
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
} & TypeAndDescriptionType;
