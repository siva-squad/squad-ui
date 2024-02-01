import clsx from "clsx";
import { tv } from "tailwind-variants";
import {
  buttonBaseCompoundVariants,
  buttonBaseVariants,
  buttonChildrenComposedVariants,
  buttonChildrenVariants,
  buttonIconCompoundVariants,
  buttonIconVariants,
} from "@/src/theme/buttonTheme";

export const ANCHOR_CLASS_NAME = tv({
  base: clsx(
    "inline-flex cursor-pointer items-center justify-center gap-1 rounded outline-none duration-300 ease-out group",
    "disabled:opacity-20",
    "focus-visible:ring-1 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
  ),
  variants: {
    ...buttonBaseVariants,
    isDisabled: {
      true: "opacity-20 cursor-not-allowed",
      false: "",
    },
  },
  compoundVariants: buttonBaseCompoundVariants,
});

export const ANCHOR_ICON_CLASS_NAME = tv({
  base: "",
  variants: buttonIconVariants,
  compoundVariants: buttonIconCompoundVariants,
});

export const ANCHOR_CHILDREN_CLASS_NAME = tv({
  base: "",
  variants: buttonChildrenVariants,
  compoundVariants: buttonChildrenComposedVariants,
});
