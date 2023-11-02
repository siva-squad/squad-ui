import { tv } from "tailwind-variants";

export const NAVIGATION_LIST_CLASS_NAME = tv({
  base: "flex",
  variants: {
    media: {
      desktop: "items-center gap-x-2",
      mobile: "flex-col gap-y-2 pt-6",
    },
  },
});
