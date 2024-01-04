import { ReactNode } from "react";

export type BreadcrumbItemProps = {
  children: ReactNode;
  clickable?: boolean;
  disabledLastStyle?: boolean;
};
