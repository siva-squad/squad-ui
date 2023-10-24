import { ReactElement, ReactNode } from "react";

export type MenuListItemProps = {
  type: "dropdown" | "header";
  chevron?: boolean;
  disabled?: boolean;
  icon?: ReactElement;
  children?: ReactNode;
  description?: string;
  selected?: boolean;
  onClick: () => void;
};