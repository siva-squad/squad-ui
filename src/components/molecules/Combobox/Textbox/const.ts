import clsx from "clsx";
import { tv } from "tailwind-variants";

export const TEXTBOX_CLASS_NAME = tv({
  base: clsx(
    "rounded-lg border border-gray-light bg-white leading-none outline-none w-full block",
    "ring-offset-2 focus:text-black focus:ring-1 focus:ring-primary-600 placeholder:text-gray-dark",
  ),
  variants: {
    size: {
      normal: "p-4 text-s",
      small: "py-2 px-4 text-xs",
    },
    disabled: {
      true: "placeholder:text-gray disabled:cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export const TEXTBOX_ICON_CLASS_NAME = tv({
  base: "h-4 w-4 stroke-gray-dark stroke-[2px]",
  variants: {
    disabled: {
      true: "stroke-gray",
      false: "",
    },
  },
});
