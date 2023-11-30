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
    background: {
      filled: "",
      white: "",
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
      gray: "shadow-01",
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
    {
      theme: "gray",
      background: "filled",
      class: "bg-black hover:bg-gray-extraDark",
    },
    {
      theme: "gray",
      background: "white",
      class: "border-px border-gray-light bg-white hover:bg-gray-extraLight active:bg-gray-light",
    },
  ],
});

export const BUTTON_ICON_CLASS_NAME = tv({
  base: "",
  variants: {
    background: {
      filled: "",
      white: "",
    },
    theme: {
      white: "text-primary-600",
      primary: "text-gray-light",
      "no-background": "text-primary-600",
      red: "text-gray-light",
      gray: "",
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
    {
      background: "filled",
      theme: "gray",
      class: "text-white",
    },
    {
      background: "white",
      theme: "gray",
      class: "text-black",
    },
  ],
});

export const BUTTON_CHILDREN_CLASS_NAME = tv({
  base: "",
  variants: {
    background: {
      filled: "",
      white: "",
    },
    theme: {
      white: "text-primary-600",
      primary: "text-white",
      "no-background": "text-primary-600 active:text-primary-900",
      red: "text-white",
      gray: "",
    },
    size: {
      small: "text-xs",
      medium: "text-sm",
      large: "text-base",
    },
  },
  compoundVariants: [
    {
      background: "filled",
      theme: "gray",
      class: "text-white",
    },
    {
      background: "white",
      theme: "gray",
      class: "text-gray-extraDark",
    },
  ],
});
