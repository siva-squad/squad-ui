import { tv } from "tailwind-variants";

export const AREA_CLASS_NAME = tv({
  variants: {
    color: {
      primary: "bg-primary-600",
      blue: "bg-blue",
      black: "bg-black",
      green: "bg-green",
      yellow: "bg-yellow",
      red: "bg-red",
      gray: "bg-gray",
      lightGray: "bg-gray-light",
    },
    width: {
      full: "w-full",
    },
  },
});
