import clsx from "clsx";
import { tv } from "tailwind-variants";

export const SELECTOR_WRAPPER_CLASS_NAME = tv({
  base: "inline-flex w-full flex-col items-start justify-start gap-2 bg-white",
  variants: {
    size: {
      small: "h-8",
      normal: "h-12",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export const SELECTOR_BUTTON_CLASS_NAME = tv({
  base: clsx(
    "inline-flex w-full items-center justify-between rounded-lg border p-4",
    "focus:ring-1 focus:ring-primary-600 focus:ring-offset-2",
  ),
  variants: {
    size: {
      small: "h-8",
      normal: "h-12",
    },
    disabled: {
      true: "border-gray-extraLight",
      false: "border-gray-light",
    },
  },
  defaultVariants: {
    size: "normal",
    disabled: false,
  },
});

export const LABEL_CLASS_NAME = tv({
  base: "text-center font-normal leading-none truncate",
  variants: {
    size: {
      small: "text-xs",
      normal: "text-sm",
    },
    disabled: {
      true: "text-gray",
    },
    isActive: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      isActive: true,
      className: "",
    },
    {
      disabled: false,
      isActive: false,
      className: "text-gray-dark",
    },
  ],
  defaultVariants: {
    size: "normal",
    disabled: false,
    isActive: false,
  },
});

export const ICON_CLASS_NAME = tv({
  base: "inline-flex h-4 w-4 items-center justify-center",
  variants: {
    disabled: {
      true: "text-gray",
      false: "text-gray-dark",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
