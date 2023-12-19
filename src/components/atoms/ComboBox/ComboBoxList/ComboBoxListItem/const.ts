import { tv } from "tailwind-variants";

export const LABEL_CLASS_NAME = tv({
  base: "text-center text-xs leading-none",
  variants: {
    isActive: {
      true: "font-medium",
      false: "font-regular",
    },
  },
  defaultVariants: {
    isActive: false,
  },
});
