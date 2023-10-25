import { ReactElement, ReactNode } from "react";

export type CommonListItemProps = {
  children?: ReactNode;
  icon?: ReactElement;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
