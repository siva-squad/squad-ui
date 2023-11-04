import { tv } from "tailwind-variants";

export const RICH_MENU_CLASS_NAME = tv({
  base: "z-10 flex h-fit w-fit gap-x-4 overflow-y-auto rounded-lg bg-white shadow-06",
  variants: {
    absolute: {
      true: "absolute mt-3",
      false: "",
    },
    anchor: {
      left: "left-0",
      right: "right-0",
    },
  },
});
