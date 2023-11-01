import { tv } from "tailwind-variants";

export const NAVIGATION_LIST_CLASS_NAME = tv({
  base: "flex",
  variants: {
    media: {
      pc: "items-center gap-x-2",
      sp: "flex-col gap-y-2 pt-6",
    },
  },
});
