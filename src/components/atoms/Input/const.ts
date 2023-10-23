import clsx from "clsx";
import { tv } from "tailwind-variants";

export const INPUT_CONTAINER_CLASS_NAME = tv({
  base: clsx(
    "inline-flex h-12 w-full items-center justify-between rounded-lg border border-gray-light bg-white p-4 text-sm leading-none outline-none",
    "ring-offset-2 focus:text-black focus:ring-1 focus:ring-primary-600",
    "disabled:cursor-not-allowed disabled:text-gray",
  ),
  variants: {
    isError: {
      true: "border-red",
      false: "",
    },
    isSuccess: {
      true: "border-green",
      false: "",
    },
  },
});

export const INPUT_ICON_CLASS_NAME = tv({
  base: "absolute right-4 top-1/2 h-4 w-4 -translate-y-2",
  variants: {
    isError: {
      true: "text-red",
      false: "",
    },
    isSuccess: {
      true: "text-green",
      false: "",
    },
  },
});
