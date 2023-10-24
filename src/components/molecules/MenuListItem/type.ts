import { ReactElement, ReactNode } from "react";

type TypeAndDescriptionType =
  | {
      type: "header";
      description?: string;
      href: string;
      onClick?: never;
    }
  | {
      type: "dropdown";
      description?: never;
      href?: never;
      onClick: () => void;
    };

export type MenuListItemProps = {
  hasChevron?: boolean;
  isDisabled?: boolean;
  icon?: ReactElement;
  selectedIcon?: ReactElement;
  title: ReactNode;
  isSelected?: boolean;
} & TypeAndDescriptionType;
