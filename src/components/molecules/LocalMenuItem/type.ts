import { ReactElement } from "react";

export type LocalMenuItemProps = {
  icon?: ReactElement;
  title: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
};
