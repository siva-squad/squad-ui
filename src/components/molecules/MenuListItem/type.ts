import { ReactElement, ReactNode } from "react";

type TypeAndDescriptionType =
  | {
      type: "header";
      description?: string;
    }
  | {
      type: "dropdown";
      description: never;
    };

export type MenuListItemProps = {
  chevron?: boolean;
  disabled?: boolean;
  icon?: ReactElement;
  selectedIcon?: ReactElement;
  children?: ReactNode;
  selected?: boolean;
  onClick: () => void;
} & TypeAndDescriptionType;
