import clsx from "clsx";
import { tv } from "tailwind-variants";

export const TEXTAREA_CLASS_NAME = tv({
  base: clsx(
    "w-full rounded-lg border border-gray-light bg-white px-4 py-2 text-s text-black outline-0 transition-colors duration-300 ease-out placeholder:text-gray-dark",
    "ring-offset-2 focus:ring-1 focus:ring-primary-600",
    "disabled:cursor-not-allowed disabled:border-gray-light disabled:text-gray disabled:placeholder:text-gray",
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
    resize: {
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
      none: "resize-none",
    },
  },
  defaultVariants: {
    isError: false,
    isSuccess: false,
    resize: "vertical",
  },
});
