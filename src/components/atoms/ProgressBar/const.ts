import { tv } from "tailwind-variants";

export const PROGRESS_BAR_WRAPPER_CLASS_NAME = tv({
  base: "w-full rounded-[16px] bg-gray-extraLight dark:bg-gray-extraDark",
  variants: {
    size: {
      small: "h-1.5",
      default: "h-2.5",
      large: "h-4",
      extraLarge: "h-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const PROGRESS_BAR_CLASS_NAME = tv({
  base: "h-full rounded-[16px]",
  variants: {
    color: {
      red: "bg-red",
      yellow: "bg-yellow",
      orange: "bg-orange",
      green: "bg-green",
      blue: "bg-blue",
      black: "bg-black",
      white: "bg-white",
      gray: "bg-gray",
      default: "bg-primary-500",
    },
    size: {
      small: "h-1.5",
      default: "h-2.5",
      large: "h-4",
      extraLarge: "h-6",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});
