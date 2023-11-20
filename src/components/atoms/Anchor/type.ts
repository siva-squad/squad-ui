import { ComponentProps, ReactNode } from "react";

type Theme = "white" | "primary" | "red" | "no-background";
type Size = "small" | "medium" | "large";

export type AnchorProps = Pick<ComponentProps<"a">, "href" | "children" | "onClick"> & {
  icon?: ReactNode;
  isDisabled?: boolean;
  theme: Theme;
  size: Size;
  isLoading?: boolean;
  iconPosition?: "left" | "right";
};
