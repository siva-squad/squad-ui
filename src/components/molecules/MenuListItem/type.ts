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
  chevron?: boolean;
  disabled?: boolean;
  icon?: ReactElement;
  selectedIcon?: ReactElement;
  children?: ReactNode;
  selected?: boolean;
} & TypeAndDescriptionType;
