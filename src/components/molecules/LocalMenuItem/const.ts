import clsx from "clsx";
import { tv } from "tailwind-variants";

export const MENUITEM_CONTAINER_CLASS_NAME = tv({
  base: "group flex h-12 w-12 flex-col items-center justify-center gap-y-1 rounded outline-none",
  variants: {
    isSelected: {
      true: "bg-primary-50",
      false: "",
    },
    isDisabled: {
      true: "cursor-not-allowed",
      false: clsx(
        "hover:bg-gray-extraLight",
        "focus-visible:bg-primary-50 focus-visible:ring-1 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
      ),
    },
  },
});

export const MENUITEM_ICON_CLASS_NAME = tv({
  base: "text-gray-dark",
  variants: {
    isSelected: {
      true: "text-primary-600",
      false: "",
    },
    isDisabled: {
      true: "text-opacity-20",
      false: clsx("group-active:text-primary-600", "group-focus-visible:text-primary-600"),
    },
  },
});

export const MENUITEM_TITLE_CLASS_NAME = tv({
  base: "text-[8px] leading-none text-gray",
  variants: {
    isSelected: {
      true: "text-primary-600",
      false: "",
    },
    isDisabled: {
      true: "text-opacity-20",
      false: clsx("group-active:text-primary-600", "group-focus-visible:text-primary-600"),
    },
  },
});
