import clsx from "clsx";
import { tv } from "tailwind-variants";

export const LIST_ITEM_CONTAINER_CLASS_NAME = tv({
  base: clsx(
    "group flex w-full items-center gap-x-2 rounded p-2 outline-none",
    "disabled:cursor-not-allowed",
    "focus-visible:ring-1 focus-visible:ring-offset-2",
  ),
  variants: {
    isDisabled: {
      true: "cursor-not-allowed",
      false: "",
    },
    isAnchor: {
      true: "",
      false: "",
    },
    isSelected: {
      true: "",
      false: "",
    },
    theme: {
      normal: clsx(
        "hover:enabled:bg-gray-extraLight",
        "focus-visible:ring-primary-600",
        "[&:not(:focus-visible)]:focus:bg-gray-extraLight",
      ),
      red: clsx("hover:enabled:bg-red-light", "focus-visible:ring-red", "focus:bg-red-light"),
    },
  },
  defaultVariants: {
    theme: "normal",
    isDisabled: false,
  },
  compoundVariants: [
    {
      theme: "red",
      isSelected: true,
      class: "bg-red-light",
    },
    {
      theme: "normal",
      isSelected: true,
      class: "bg-gray-extraLight",
    },
    {
      theme: "normal",
      isAnchor: true,
      isDisabled: false,
    },
    {
      theme: "red",
      isAnchor: true,
      isDisabled: false,
      class: "hover:bg-red-light",
    },
  ],
});

export const LIST_ITEM_TEXT_CLASS_NAME = tv({
  base: clsx("truncate w-full text-left text-sm font-medium", "group-disabled:opacity-20"),
  variants: {
    isDisabled: {
      true: "opacity-20",
      false: "",
    },
    size: {
      small: "text-xs text-gray-dark",
      medium: "text-gray-dark",
      large: "",
    },
    theme: {
      normal: clsx("group-enabled:group-active:text-primary-600", "group-focus:text-primary-600"),
      red: "text-red",
    },
    defaultVariants: {
      theme: "normal",
      isDisabled: false,
    },
  },
});

export const LIST_ITEM_ICON_CLASS_NAME = tv({
  base: clsx("h-4 w-4 shrink-0 text-gray", "group-disabled:opacity-20"),
  variants: {
    isDisabled: {
      true: "opacity-20",
      false: "",
    },
    isSelected: {
      true: "",
      false: "",
    },
    size: {
      small: "",
      medium: "",
      large: "h-6 w-6",
    },
    theme: {
      normal: clsx("group-enabled:group-active:text-primary-600", "group-focus:text-primary-600"),
      red: "text-red",
    },
  },
  defaultVariants: {
    theme: "normal",
    isDisabled: false,
  },
  compoundVariants: [
    {
      isSelected: true,
      theme: "normal",
      class: "text-primary-600",
    },
  ],
});

export const LIST_ITEM_DESCRIPTION_CLASS_NAME = tv({
  base: clsx("truncate text-xs text-gray", "group-disabled:opacity-20"),
  variants: {
    isDisabled: {
      true: "opacity-20",
      false: "",
    },
    isSelected: {
      true: "",
      false: "",
    },
    theme: {
      normal: clsx("group-enabled:group-active:text-primary-400", "group-focus:text-primary-400"),
      red: clsx("group-enabled:group-active:text-red", "group-focus:text-red"),
    },
  },
  defaultVariants: {
    theme: "normal",
    isDisabled: false,
  },
  compoundVariants: [
    {
      theme: "red",
      isSelected: true,
      class: "text-red",
    },
    {
      theme: "normal",
      isSelected: true,
      class: "text-primary-400",
    },
  ],
});

export const LIST_CHEVRON_CLASS_NAME = tv({
  base: clsx("h-4 w-4 text-gray-dark", "group-disabled:opacity-20"),
  variants: {
    isDisabled: {
      true: "opacity-20",
      false: "",
    },
  },
  defaultVariants: {
    isDisabled: false,
  },
});
