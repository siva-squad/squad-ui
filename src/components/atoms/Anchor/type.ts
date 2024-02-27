import { ComponentProps, ReactNode } from "react";

type Theme = "primary" | "red" | "gray";
type Size = "small" | "medium" | "large";
type Variant = "fill" | "outline" | "text" | "underline";

export type AnchorProps = Pick<ComponentProps<"a">, "onClick" | "children"> & {
  icon?: ReactNode;
  variant: Variant;
  theme: Theme;
  size: Size;
  loading?: boolean;
  iconPosition?: "left" | "right";
  isDisabled?: boolean;
  href: string;
};
