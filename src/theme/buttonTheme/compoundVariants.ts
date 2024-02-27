import { ComponentVariants } from "./type";
import { buttonBaseVariants, buttonIconVariants } from "./variants";

export const buttonBaseCompoundVariants: ComponentVariants<typeof buttonBaseVariants>[] = [
  {
    showIcon: true,
    isLoading: false,
    size: "medium",
    class: "p-2",
  },
  {
    hasChildren: false,
    size: "small",
    class: "p-1.5",
  },
  {
    hasChildren: false,
    size: "medium",
    class: "p-2",
  },
  {
    hasChildren: false,
    size: "large",
    class: "p-2",
  },
  {
    showIcon: true,
    isLoading: false,
    variant: "text",
    size: "medium",
    class: "px-1 py-0.5",
  },
  {
    hasChildren: false,
    variant: "text",
    class: "px-1 py-0.5",
  },
  {
    theme: "red",
    variant: "fill",
    class: "shadow-01 bg-red text-white",
  },
  {
    theme: "red",
    variant: "fill",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-red-dark active:bg-red-dark",
  },
  {
    theme: "primary",
    variant: "fill",
    class: "bg-primary-600 shadow-01 text-white",
  },
  {
    theme: "primary",
    variant: "fill",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-primary-700 active:bg-primary-900",
  },
  {
    theme: "gray",
    variant: "fill",
    class: "shadow-01 bg-gray-extraDark text-white",
  },
  {
    theme: "gray",
    variant: "fill",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-black",
  },
  {
    theme: "red",
    variant: "outline",
    class: "border border-red text-red shadow-01",
  },
  {
    theme: "red",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-red-light active:border-red-dark active:text-red-dark",
  },
  {
    theme: "primary",
    variant: "outline",
    class: "border border-primary-400 bg-white shadow-01 text-primary-600",
  },
  {
    theme: "primary",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-primary-100 active:bg-primary-300",
  },
  {
    theme: "gray",
    variant: "outline",
    class: "border border-gray-light bg-white shadow-01 text-gray-extraDark",
  },
  {
    theme: "gray",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-gray-extraLight active:bg-gray-light",
  },
  {
    variant: "outline",
    isLoading: true,
    class: "text-black",
  },
  {
    theme: "red",
    variant: "text",
    class: "text-red",
  },
  {
    theme: "red",
    variant: "text",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-red-light active:text-red-dark",
  },
  {
    theme: "primary",
    variant: "text",
    class: "text-primary-600",
  },
  {
    theme: "primary",
    variant: "text",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-gray-extraLight active:text-primary-900",
  },
  {
    theme: "gray",
    variant: "text",
    class: "text-gray-extraDark",
  },
  {
    theme: "gray",
    variant: "text",
    isDisabled: false,
    isLoading: false,
    class: "hover:bg-gray-extraLight active:text-black",
  },
];

export const buttonIconCompoundVariants: ComponentVariants<typeof buttonIconVariants>[] = [
  {
    size: "large",
    hasChildren: true,
    class: "h-4 w-4",
  },
];
