import { ComponentProps, ReactNode } from "react";

export type RadioButtonProps = {
  name: string;
  checked: boolean;
  children?: ReactNode;
  value: string;
  onChange: ComponentProps<"input">["onChange"];
};
