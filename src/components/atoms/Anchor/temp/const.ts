import clsx from "clsx";
import { tv } from "tailwind-variants";

export const ANCHOR_CLASS_NAME = tv({
  base: clsx(
    "inline-flex cursor-pointer items-center justify-center gap-1 rounded outline-none duration-300 ease-out",
    "disabled:opacity-20",
    "focus-visible:ring-1 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
  ),
  variants: {
    isDisabled: {
      true: "cursor-not-allowed opacity-20",
      false: "",
    },
    isLoading: {
      true: "",
      false: "",
    },
    hasChildren: {
      true: "text-center font-medium leading-none",
      false: "",
    },
    theme: {
      white:
        "border border-primary-400 bg-white shadow-01 hover:bg-primary-100 active:bg-primary-300",
      primary: "bg-primary-600 shadow-01 hover:bg-primary-700 active:bg-primary-900",
      "no-background": "hover:bg-gray-extraLight",
      red: "bg-red shadow-01 hover:bg-red-dark",
    },
    size: {
      small: "p-1.5",
      medium: "p-2",
      large: "p-2",
    },
  },
  compoundVariants: [
    {
      theme: "white",
      isLoading: true,
      class: "text-black",
    },
    {
      hasChildren: true,
      size: "small",
      class: "px-2 py-1.5",
    },
    {
      hasChildren: true,
      size: "large",
      class: "px-4 py-3",
    },
    {
      theme: "no-background",
      class: "px-1 py-0.5",
    },
  ],
});

export const ANCHOR_ICON_CLASS_NAME = tv({
  base: "",
  variants: {
    theme: {
      white: "text-primary-600",
      primary: "text-gray-light",
      "no-background": "text-primary-600",
      red: "text-gray-light",
    },
    size: {
      small: "h-3 w-3",
      medium: "h-4 w-4",
      large: "h-6 w-6",
    },
    hasChildren: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      size: "large",
      hasChildren: true,
      class: "h-4 w-4",
    },
  ],
});

export const ANCHOR_CHILDREN_CLASS_NAME = tv({
  base: "",
  variants: {
    theme: {
      white: "text-primary-600",
      primary: "text-white",
      "no-background": "text-primary-600 active:text-primary-900",
      red: "text-white",
    },
    size: {
      small: "text-xs",
      medium: "text-sm",
      large: "text-base",
    },
  },
});
