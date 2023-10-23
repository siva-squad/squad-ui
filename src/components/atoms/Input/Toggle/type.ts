import { ComponentProps } from "react";

export type ToggleProps = Pick<ComponentProps<"input">, "disabled"> & {
  value: boolean;
  onToggle: NonNullable<ComponentProps<"input">["onChange"]>;
};
