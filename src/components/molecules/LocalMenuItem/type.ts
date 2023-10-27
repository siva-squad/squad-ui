import { ReactElement } from "react";

export type LocalMenuItemProps = {
  icon?: ReactElement;
  selectedIcon?: ReactElement;
  title: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick: () => void;
};
