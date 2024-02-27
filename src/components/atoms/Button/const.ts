import clsx from "clsx";
import { tv } from "tailwind-variants";
import {
  buttonBaseVariants,
  buttonChildrenVariants,
  buttonBaseCompoundVariants,
  buttonIconCompoundVariants,
  buttonIconVariants,
} from "@/src/theme/buttonTheme";

export const BUTTON_CLASS_NAME = tv({
  base: clsx(
    "group inline-flex items-center justify-center gap-1 rounded outline-none transition-all duration-300 ease-out",
    "focus-visible:ring-1 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
  ),
  variants: buttonBaseVariants,
  compoundVariants: buttonBaseCompoundVariants,
});

export const BUTTON_ICON_CLASS_NAME = tv({
  base: "",
  variants: buttonIconVariants,
  compoundVariants: buttonIconCompoundVariants,
});

export const BUTTON_CHILDREN_CLASS_NAME = tv({
  base: "",
  variants: buttonChildrenVariants,
});
