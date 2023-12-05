import { ComponentProps } from "react";
import { BadgeProps } from "@components/atoms/Badge/type";
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
    label?: string;
    badgeColor?: BadgeProps["color"];
    badgeText?: string;
    helperText?: string;
  };
