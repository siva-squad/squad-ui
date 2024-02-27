import { tv } from "tailwind-variants";

export const SPINNER_CLASS_NAME = tv({
  base: "animate-spin text-opacity-20",
  variants: {
    variant: {
      fill: "",
      outline: "",
      text: "",
    },
    size: {
      small: "h-3 w-3",
      medium: "h-4 w-4",
      large: "h-6 w-6",
    },
    theme: {
      primary: "",
      red: "",
      gray: "",
    },
  },
  compoundVariants: [
    {
      theme: "primary",
      variant: "fill",
      class: "fill-white text-primary-800",
    },
    {
      theme: "red",
      variant: "fill",
      class: "fill-white text-red-dark",
    },
    {
      theme: "gray",
      variant: "fill",
      class: "fill-white text-black",
    },
    {
      theme: "primary",
      variant: "outline",
      class: "fill-primary-600 text-gray",
    },
    {
      theme: "red",
      variant: "outline",
      class: "fill-red text-gray",
    },
    {
      theme: "gray",
      variant: "outline",
      class: "fill-black text-gray",
    },
    {
      theme: "primary",
      variant: "text",
      class: "fill-primary-600 text-gray",
    },
    {
      theme: "red",
      variant: "text",
      class: "fill-red text-gray",
    },
    {
      theme: "gray",
      variant: "text",
      class: "fill-black text-gray",
    },
  ],
});
