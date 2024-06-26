import { ComponentProps } from "react";
import { InputStyleProps } from "../type";

export type InputNumberProps = InputStyleProps &
  Pick<
    ComponentProps<"input">,
    | "id"
    | "name"
    | "min"
    | "max"
    | "step"
    | "placeholder"
    | "disabled"
    | "onFocus"
    | "onBlur"
    | "inputMode"
    | "autoComplete"
    | "onChange"
    | "defaultValue"
  > & {
    showSuccess?: boolean;
  };
