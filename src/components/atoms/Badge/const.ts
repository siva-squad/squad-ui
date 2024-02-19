import { tv } from "tailwind-variants";

export const COLORS = [
  "primary",
  "blue",
  "green",
  "yellow",
  "red",
  "black",
  "gray",
  "lightGray",
] as const;

export const THEMES = ["fill", "border", "light-fill"] as const;

export const BADGE_CLASS_NAME = tv({
  base: "rounded-full px-2 py-1 !text-xxs",
  variants: {
    color: {
      primary: "",
      blue: "",
      black: "",
      green: "",
      yellow: "",
      red: "",
      gray: "",
      lightGray: "",
    },
    theme: {
      border: "",
      fill: "",
      "light-fill": "",
    },
  },
  compoundVariants: [
    // Primary
    {
      color: "primary",
      theme: "fill",
      class: "bg-primary-600 text-white",
    },
    {
      color: "primary",
      theme: "border",
      class: "border-primary-600 text-primary-600 border bg-white",
    },
    {
      color: "primary",
      theme: "light-fill",
      class: "bg-primary-50 text-primary-600",
    },
    // -- Blue --
    {
      color: "blue",
      theme: "fill",
      class: "bg-blue text-white",
    },
    {
      color: "blue",
      theme: "border",
      class: "border-blue text-blue border bg-white",
    },
    {
      color: "blue",
      theme: "light-fill",
      class: "bg-blue-light text-blue",
    },
    // -- Green --
    {
      color: "green",
      theme: "fill",
      class: "bg-green text-white",
    },
    {
      color: "green",
      theme: "border",
      class: "border-green text-green-dark border bg-white",
    },
    {
      color: "green",
      theme: "light-fill",
      class: "bg-green-light text-green-dark",
    },
    // -- Yellow --
    {
      color: "yellow",
      theme: "fill",
      class: "bg-yellow text-black",
    },
    {
      color: "yellow",
      theme: "border",
      class: "border-yellow  text-yellow-dark border bg-white",
    },
    {
      color: "yellow",
      theme: "light-fill",
      class: "bg-yellow-light text-yellow-dark",
    },
    // -- Red --
    {
      color: "red",
      theme: "fill",
      class: "bg-red text-white",
    },
    {
      color: "red",
      theme: "border",
      class: "border-red text-red border bg-white",
    },
    {
      color: "red",
      theme: "light-fill",
      class: "bg-red-light text-red",
    },
    // -- Black --
    {
      color: "black",
      theme: "fill",
      class: "bg-black text-white",
    },
    {
      color: "black",
      theme: "border",
      class: "border border-black bg-white text-black",
    },
    {
      color: "black",
      theme: "light-fill",
      class: "bg-gray-extraLight text-black",
    },
    // -- Gray --
    {
      color: "gray",
      theme: "fill",
      class: "bg-gray-dark text-white",
    },
    {
      color: "gray",
      theme: "border",
      class: "border-gray-dark text-gray-dark border bg-white",
    },
    {
      color: "gray",
      theme: "light-fill",
      class: "bg-gray-extraLight text-gray-dark",
    },
    // -- Light Gray --
    {
      color: "lightGray",
      theme: "fill",
      class: "bg-gray text-white",
    },
    {
      color: "lightGray",
      theme: "border",
      class: "border-gray border bg-white text-black",
    },
    {
      color: "lightGray",
      theme: "light-fill",
      class: "bg-gray-extraLight text-black",
    },
  ],
});
