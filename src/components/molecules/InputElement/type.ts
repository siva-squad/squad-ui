import { ReactElement } from "react";
import { RequiredBadgeProps } from "../../atoms/RequiredBadge/type";

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
  occupyErrorArea?: boolean;
  render: (form: FormType) => ReactElement;
} & FormType &
  RequiredBadgeProps;
