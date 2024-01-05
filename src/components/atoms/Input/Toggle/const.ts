import { tv } from "tailwind-variants";

export const TOGGLE_CONTAINER_CLASS_NAME = tv({
  base: "flex h-fit w-10 rounded-full p-[2px] transition-colors",
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer",
    },
    isValidValue: {
      true: "bg-primary-600 aria-disabled:bg-disabled-primary",
      false: "bg-gray-light",
    },
    size: {
      small: "w-6 p-[1px]",
      normal: "",
    },
  },
  defaultVariants: {
    disabled: false,
    isValidValue: true,
  },
});

export const TOGGLE_CIRCLE_CLASS_NAME = tv({
  base: "flex h-5 w-5 items-center justify-center rounded-full bg-white transition-all",
  variants: {
    isValidValue: {
      true: "",
      false: "translate-x-0",
    },
    size: {
      small: "h-3 w-3",
      normal: "",
    },
  },
  compoundVariants: [
    {
      isValidValue: true,
      size: "normal",
      className: "translate-x-4",
    },
    {
      isValidValue: true,
      size: "small",
      className: "translate-x-[10px]",
    },
  ],
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
    size: {
      small: "h-2 w-2",
      normal: "",
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
