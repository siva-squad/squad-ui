import { ComponentProps, ReactNode } from "react";

export type AccordionProps = Pick<ComponentProps<"button">, "disabled"> & {
  label: ReactNode;
  children: ReactNode;
};
