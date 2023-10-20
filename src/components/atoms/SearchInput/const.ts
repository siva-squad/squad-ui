import clsx from "clsx";
import { tv } from "tailwind-variants";

export const SEARCH_INPUT_CLASS_NAME = tv({
  base: clsx(
    "block w-full rounded-3xl border border-gray-extraLight p-4 pl-9 text-s text-black",
    "focus:border-gray focus:outline-none",
  ),
  variants: {
    inputSize: {
      normal: "py-3 text-s",
      small: "py-2 text-xs",
    },
    inputStyle: {
      filled: "bg-gray-extraLight",
      outline: "",
    },
  },
  defaultVariants: {
    inputSize: "small",
    inputStyle: "outline",
  },
});
