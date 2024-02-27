import { ComponentProps, ReactNode } from "react";

type Theme = "primary" | "red" | "gray";
type Size = "small" | "medium" | "large";
type Variant = "fill" | "outline" | "text";

export type ButtonProps = Pick<
  ComponentProps<"button">,
  "onClick" | "disabled" | "children" | "type"
> & {
  icon?: ReactNode;
  variant: Variant;
  theme: Theme;
  size: Size;
  loading?: boolean;
  iconPosition?: "left" | "right";
};
