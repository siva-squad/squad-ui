import { tv } from "tailwind-variants";

export const TOGGLE_CONTAINER_CLASS_NAME = tv({
  base: "flex rounded-full transition-colors w-10 p-[2px]",
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer",
    },
    isValidValue: {
      true: "bg-primary-600 aria-disabled:bg-disabled-primary",
      false: "bg-gray-light",
    },
  },
  defaultVariants: {
    disabled: false,
    isValidValue: true,
  },
});

export const TOGGLE_CIRCLE_CLASS_NAME = tv({
  base: "flex items-center justify-center rounded-full transition-all bg-white h-5 w-5",
  variants: {
    isValidValue: {
      true: "translate-x-4",
      false: "translate-x-0",
    },
  },
});

export const TOGGLE_ICON_CLASS_NAME = tv({
  base: "h-3 w-3",
  variants: {
    isValidValue: {
      true: "",
      false: "",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      isValidValue: true,
      disabled: true,
      class: "text-disabled-primary",
    },
    {
      isValidValue: true,
      disabled: false,
      class: "text-primary-600",
    },
    {
      isValidValue: false,
      disabled: true,
      class: "text-gray-light",
    },
    {
      isValidValue: false,
      disabled: false,
      class: "text-gray",
    },
  ],
  defaultVariants: {
    disabled: false,
    isValidValue: true,
  },
});
