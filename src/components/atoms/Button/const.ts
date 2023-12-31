import clsx from "clsx";
import { tv } from "tailwind-variants";
import {
  buttonBaseVariants,
  buttonChildrenComposedVariants,
  buttonChildrenVariants,
  buttonCompoundVariants,
  buttonIconCompoundVariants,
  buttonIconVariants,
} from "@/src/theme/buttonTheme";

export const BUTTON_CLASS_NAME = tv({
  base: clsx(
    "group inline-flex items-center justify-center gap-1 rounded outline-none duration-300 ease-out",
    "disabled:opacity-20",
    "focus-visible:ring-1 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
  ),
  variants: buttonBaseVariants,
  compoundVariants: buttonCompoundVariants,
});

export const BUTTON_ICON_CLASS_NAME = tv({
  base: "",
  variants: buttonIconVariants,
  compoundVariants: buttonIconCompoundVariants,
});

export const BUTTON_CHILDREN_CLASS_NAME = tv({
  base: "",
  variants: buttonChildrenVariants,
  compoundVariants: buttonChildrenComposedVariants,
});
