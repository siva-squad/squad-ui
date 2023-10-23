import clsx from "clsx";
import { tv } from "tailwind-variants";

export const BUTTON_CLASS_NAME = tv({
  base: clsx(
    "inline-flex items-center justify-center gap-1 rounded outline-none duration-300 ease-out",
    "disabled:opacity-20",
    "focus-visible:ring-1 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
  ),
  variants: {
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
        "bg-white hover:bg-primary-100 border border-primary-400 shadow-01 active:bg-primary-300",
      primary: "bg-primary-600 hover:bg-primary-700 shadow-01 active:bg-primary-900",
      "no-background": "hover:bg-gray-extraLight",
      red: "bg-red hover:bg-red-dark shadow-01",
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
      class: "py-0.5 px-1",
    },
  ],
});

export const BUTTON_ICON_CLASS_NAME = tv({
  base: "",
  variants: {
    theme: {
      white: "text-primary-600",
      primary: "text-gray-light",
      "no-background": "text-primary-600",
      red: "text-gray-light",
    },
    size: {
      small: "w-3 h-3",
      medium: "w-4 h-4",
      large: "w-6 h-6",
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
      class: "w-4 h-4",
    },
  ],
});

export const BUTTON_CHILDREN_CLASS_NAME = tv({
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
