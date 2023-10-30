import { ReactElement, ReactNode } from "react";

type TypeAndDescriptionType =
  | {
      size?: "large";
      description?: string;
    }
  | {
      size?: "medium" | "small";
      description?: never;
    };

type AnchorAndButtonType =
  | {
      href: string;
      onClick?: never;
    }
  | {
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
} & TypeAndDescriptionType &
  AnchorAndButtonType;
