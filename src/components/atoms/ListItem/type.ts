import { HTMLAttributeAnchorTarget, ReactElement, ReactNode } from "react";

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
      target?: HTMLAttributeAnchorTarget;
      onClick?: never;
    }
  | {
      href?: never;
      target?: never;
      onClick: () => void;
    };

export type ListItemProps = {
  id?: string;
  hasChevron?: boolean;
  isDisabled?: boolean;
  icon?: ReactElement;
  selectedIcon?: ReactElement;
  title: ReactNode;
  isSelected?: boolean;
} & TypeAndDescriptionType &
  AnchorAndButtonType;
