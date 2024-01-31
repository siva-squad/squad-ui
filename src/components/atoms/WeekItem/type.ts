import { VariantProps } from "tailwind-variants";
import { WEEK_ITEM_VARIANTS } from "./const";

export type WeekItemProps = {
  children: string;
} & VariantProps<typeof WEEK_ITEM_VARIANTS>;
