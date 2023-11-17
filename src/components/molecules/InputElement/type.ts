import { ReactElement } from "react";
import { RequiredBadgeProps } from "./RequiredBadge/type";

type FormType = {
  id: string;
  label: string;
};

export type InputElementProps = {
  errorText?: string;
  descriptionText?: string;
  showRequired?: boolean;
  showLabel?: boolean;
  children?: ReactElement;
  render?: (form: FormType) => ReactElement;
} & FormType &
  RequiredBadgeProps;
