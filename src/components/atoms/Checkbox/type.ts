import { ReactNode, ComponentProps } from "react";

export type CheckboxProps = {
  checked: boolean;
  children?: ReactNode;
  value: string;
  onChange: ComponentProps<"input">["onChange"];
};
