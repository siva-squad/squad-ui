import { tv } from "tailwind-variants";

export const REQUIRED_BADGE_CLASS_NAME = tv({
  base: "rounded-full px-2 py-1 !text-xxs",
  variants: {
    isRequired: {
      true: "bg-red-light text-red",
      false: "bg-gray-extraLight text-gray-dark",
    },
  },
  defaultVariants: {
    isRequired: false,
  },
});
