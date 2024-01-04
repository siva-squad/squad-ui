import { ReactElement, ReactNode } from "react";
import { BreadcrumbItemProps } from "@components/atoms/BreadcrumbItem/type";

export type BreadcrumbsProps = {
  children: ReactElement<BreadcrumbItemProps>[];
  separator?: ReactNode;
};
