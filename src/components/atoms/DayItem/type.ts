import { ComponentProps } from "react";
import { VariantProps } from "tailwind-variants";
import { DAY_ITEM_VARIANTS } from "./const";

export type DayItemProps = {
  date: Date;
  onClick: (date: Date) => void;
} & VariantProps<typeof DAY_ITEM_VARIANTS> &
  Pick<ComponentProps<"button">, "disabled">;
