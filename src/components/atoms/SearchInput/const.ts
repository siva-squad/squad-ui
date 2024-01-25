import clsx from "clsx";
import { tv } from "tailwind-variants";

export const SEARCH_INPUT_CLASS_NAME = tv({
  base: clsx(
    "block w-full rounded-lg border border-gray-extraLight py-4 pl-9 pr-4 text-s text-black",
    "focus:border-primary-600 focus:outline-none",
    'placeholder:text-gray-dark'
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
