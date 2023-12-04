import { tv } from "tailwind-variants";

export const TAB_NAVIGATION_CLASS_NAME = tv({
  base: "flex w-full border-b",
  variants: {
    backgroundColor: {
      transparent: "",
      white: "bg-white",
    },
    passiveBorderColor: {
      gray: "border-gray-light",
    },
  },
  defaultVariants: {
    backgroundColor: "transparent",
    passiveBorderColor: "gray",
  },
});

export const TAB_NAVIGATION_BUTTON_CLASS_NAME = tv({
  base: "-mb-px border-b px-2 py-4 font-medium",
  variants: {
    isActive: {
      true: "",
      false: "",
    },
    activeBorderColor: {
      black: "",
    },
    passiveTextColor: {
      gray: "",
    },
    activeTextColor: {
      black: "",
    },
  },
  compoundVariants: [
    {
      isActive: true,
      activeBorderColor: "black",
      activeTextColor: "black",
      class: "border-black text-black",
    },
    {
      isActive: false,
      passiveTextColor: "gray",
      class: "border-[transparent] text-gray-dark",
    },
  ],
});
