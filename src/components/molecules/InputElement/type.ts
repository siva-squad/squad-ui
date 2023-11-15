import { ReactElement } from "react";
import { RequiredBadgeProps } from "./RequiredBadge/type";

export type InputElementProps = {
  title?: string;
  errorText?: string;
  descriptionText?: string;
  showRequired?: boolean;
  children?: ReactElement;
} & RequiredBadgeProps;
