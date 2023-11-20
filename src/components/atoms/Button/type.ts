import { ComponentProps, ReactNode } from "react";

type Theme = "white" | "primary" | "red" | "no-background";
type Size = "small" | "medium" | "large";

export type ButtonProps = Pick<
  ComponentProps<"button">,
  "onClick" | "disabled" | "children" | "type"
> & {
  icon?: ReactNode;
  theme: Theme;
  size: Size;
  loading?: boolean;
  iconPosition?: "left" | "right";
};
