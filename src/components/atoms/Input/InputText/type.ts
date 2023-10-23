import { ComponentProps } from "react";
import { InputStyleProps } from "../type";

export type InputTextProps = InputStyleProps &
  Pick<
    ComponentProps<"input">,
    | "id"
    | "name"
    | "maxLength"
    | "autoComplete"
    | "placeholder"
    | "inputMode"
    | "disabled"
    | "onFocus"
    | "onBlur"
    | "defaultValue"
    | "value"
    | "onChange"
  > & {
    showSuccess?: boolean;
    type?: "email" | "password" | "search" | "text";
  };
