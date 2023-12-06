import { ComponentProps, ReactNode } from "react";

type Theme = "white" | "primary" | "red" | "gray" | "no-background";
type Size = "small" | "medium" | "large";
type Background = "filled" | "white";

export type AnchorProps = Pick<ComponentProps<"a">, "onClick" | "children"> & {
  icon?: ReactNode;
  background?: Background;
  theme: Theme;
  size: Size;
  loading?: boolean;
  iconPosition?: "left" | "right";
  isDisabled?: boolean;
  href: string;
};
