import { ComponentProps } from "react";
import { BadgeProps } from "@components/atoms/Badge/type";
import { InputStyleProps } from "../type";

export type InputNumberProps = InputStyleProps &
  Pick<
    ComponentProps<"input">,
    | "id"
    | "name"
    | "min"
    | "max"
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
    label?: string;
    badgeColor?: BadgeProps["color"];
    badgeText?: string;
    helperText?: string;
  };
