import { ReactElement } from "react";

export type LocalMenuItemProps = {
  id?: string;
  icon?: ReactElement;
  selectedIcon?: ReactElement;
  title: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  href: string;
};
