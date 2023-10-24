import clsx from "clsx";
import { tv } from "tailwind-variants";

export const MENU_LIST_ITEM_CONTAINER_CLASS_NAME = tv({
  base: clsx(
    "group flex w-fit items-center gap-x-2 rounded px-2 outline-none",
    "hover:bg-gray-extraLight",
    "disabled:cursor-not-allowed disabled:opacity-20",
    "focus:border focus:border-primary-600",
  ),
  variants: {
    selected: {
      true: "bg-primary-50",
      false: "",
    },
    type: {
      dropdown: "h-8",
      header: "h-fit py-2",
    },
  },
});

export const MENU_LIST_ITEM_TEXT_CLASS_NAME = tv({
  base: clsx("text-sm font-medium text-gray-dark", "group-enabled:group-active:text-primary-600"),
  variants: {
    selected: {
      true: "text-primary-600",
      false: "",
    },
  },
});

export const MENU_LIST_ITEM_ICON_CLASS_NAME = tv({
  base: clsx("h-4 w-4 text-gray", "group-enabled:group-active:text-primary-600"),
  variants: {
    selected: {
      true: "text-primary-600",
      false: "",
    },
  },
});
