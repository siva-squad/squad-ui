import clsx from "clsx";
import { tv } from "tailwind-variants";

export const MENUITEM_CONTAINER_CLASS_NAME = tv({
  base: clsx(
    "group flex h-12 w-12 flex-col items-center justify-center gap-y-1 rounded outline-none",
    "enabled:hover:bg-gray-extraLight",
    "focus-visible:bg-primary-50 focus-visible:ring-1 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed ",
  ),
  variants: {
    isSelected: {
      true: "bg-primary-50",
      false: "",
    },
  },
});

export const MENUITEM_ICON_CLASS_NAME = tv({
  base: clsx(
    "text-gray-dark",
    "group-enabled:group-active:text-primary-600",
    "group-focus-visible:text-primary-600",
    "group-disabled:text-opacity-20",
  ),
  variants: {
    isSelected: {
      true: "text-primary-600",
      false: "",
    },
  },
});

export const MENUITEM_TITLE_CLASS_NAME = tv({
  base: clsx(
    "!text-xxs leading-none text-gray",
    "group-enabled:group-active:text-primary-600",
    "group-focus-visible:text-primary-600",
    "group-disabled:text-opacity-20",
  ),
  variants: {
    isSelected: {
      true: "text-primary-600",
      false: "",
    },
  },
});