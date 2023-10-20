import { tv } from "tailwind-variants";

export const SPINNER_CLASS_NAME = tv({
  base: "animate-spin text-[#000] text-opacity-20",
  variants: {
    size: {
      small: "w-3 h-3",
      medium: "w-4 h-4",
      large: "w-6 h-6",
    },
    theme: {
      white: "fill-gray-light",
      primary: "fill-primary-600",
    },
  },
});
