import { ComponentProps } from "react";

export type CheckboxProps = {
  value?: string;
} & Pick<ComponentProps<"input">, "onChange" | "disabled" | "checked" | "children">;
