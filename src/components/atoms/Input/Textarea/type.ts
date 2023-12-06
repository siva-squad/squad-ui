import { ComponentProps } from "react";

export type TextareaProps = Pick<
  ComponentProps<"textarea">,
  | "id"
  | "value"
  | "onChange"
  | "onFocus"
  | "onBlur"
  | "disabled"
  | "placeholder"
  | "rows"
  | "maxLength"
  | "autoComplete"
> & {
  state?: "error";
  showSuccess?: boolean;
  resize?: "vertical" | "horizontal" | "both" | "none";
};
