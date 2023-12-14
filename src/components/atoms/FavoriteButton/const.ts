import { tv } from "tailwind-variants";

export const ICON_CLASS_NAME = tv({
  variants: {
    isFavorite: {
      true: "fill-yellow",
      false: "stroke-gray",
    },
    size: {
      small: "h-3 w-3",
      medium: "h-4 w-4",
      large: "h-6 w-6",
    },
  },
});
