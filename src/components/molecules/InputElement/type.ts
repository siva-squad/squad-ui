import { ReactElement } from "react";
import { RequiredBadgeProps } from "./RequiredBadge/type";

type FormType = {
  htmlFor: string;
};

export type InputElementProps = {
  label: string;
  errorText?: string;
  description?: string | ReactElement;
  showRequired?: boolean;
  showLabel?: boolean;
  children?: ReactElement;
  render: (form: FormType) => ReactElement;
} & FormType &
  RequiredBadgeProps;
