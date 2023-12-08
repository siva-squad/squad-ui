import { tv } from "tailwind-variants";

export const SPINNER_CLASS_NAME = tv({
  base: "animate-spin  text-opacity-20",
  variants: {
    background: {
      filled: "",
      white: "",
    },
    size: {
      small: "h-3 w-3",
      medium: "h-4 w-4",
      large: "h-6 w-6",
    },
    theme: {
      white: "fill-primary-600 text-gray",
      primary: "fill-white text-primary-800",
      gray: "",
      red: "fill-white text-red-dark",
      "no-background": "fill-primary-600 text-gray",
    },
  },
  compoundVariants: [
    {
      background: "filled",
      theme: "gray",
      class: "fill-white text-black",
    },
    {
      background: "white",
      theme: "gray",
      class: "fill-black text-gray",
    },
  ],
});
