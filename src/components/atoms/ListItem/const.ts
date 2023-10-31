import clsx from "clsx";
import { tv } from "tailwind-variants";

export const LIST_ITEM_CONTAINER_CLASS_NAME = tv({
  base: clsx(
    "group flex w-full items-center gap-x-2 rounded p-2 outline-none",
    "hover:bg-gray-extraLight",
    "disabled:cursor-not-allowed disabled:opacity-20",
    "focus-visible:ring-1 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
    "focus:bg-primary-50",
  ),
  variants: {
    isSelected: {
      true: "bg-primary-50",
      false: "",
    },
  },
});

export const LIST_ITEM_TEXT_CLASS_NAME = tv({
  base: clsx(
    "break-keep text-sm font-medium text-gray-dark",
    "group-enabled:group-active:text-primary-600",
    "group-focus:text-primary-600",
  ),
  variants: {
    isSelected: {
      true: "text-primary-600",
      false: "",
    },
    size: {
      small: "text-xs",
      medium: "",
      large: "text-black",
    },
  },
});

export const LIST_ITEM_ICON_CLASS_NAME = tv({
  base: clsx(
    "h-4 w-4 text-gray",
    "group-enabled:group-active:text-primary-600",
    "group-focus:text-primary-600",
  ),
  variants: {
    isSelected: {
      true: "text-primary-600",
      false: "",
    },
    size: {
      small: "",
      medium: "",
      large: "h-6 w-6",
    },
  },
});

export const LIST_ITEM_DESCRIPTION_CLASS_NAME = tv({
  base: clsx(
    "break-keep text-xs text-gray",
    "group-enabled:group-active:text-primary-400",
    "group-focus:text-primary-600",
  ),
  variants: {
    isSelected: {
      true: "text-primary-400",
      false: "",
    },
  },
});
