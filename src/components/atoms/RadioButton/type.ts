import { ComponentProps } from "react";

export type RadioButtonProps = {
  value?: string;
} & Pick<ComponentProps<"input">, "name" | "checked" | "children" | "onChange" | "disabled">;
