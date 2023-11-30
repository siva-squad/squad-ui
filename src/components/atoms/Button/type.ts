import { ComponentProps, ReactNode } from "react";

type Theme = "white" | "primary" | "red" | "gray" | "no-background";
type Size = "small" | "medium" | "large";
type Background = "filled" | "white";

export type ButtonProps = Pick<
  ComponentProps<"button">,
  "onClick" | "disabled" | "children" | "type"
> & {
  icon?: ReactNode;
  background?: Background;
  theme: Theme;
  size: Size;
  loading?: boolean;
  iconPosition?: "left" | "right";
};
