export const buttonCompoundVariants = [
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
    isLoading: true,
    class: "bg-gray-extraDark",
  },
  {
    theme: "gray",
    background: "filled",
    isLoading: false,
    class: "bg-black hover:bg-gray-extraDark",
  },
  {
    theme: "gray",
    background: "white",
    class: "border-px border-gray-light bg-white hover:bg-gray-extraLight active:bg-gray-light",
  },
  {
    theme: "red",
    background: "filled",
    isLoading: true,
    class: "bg-red",
  },
  {
    theme: "red",
    background: "filled",
    isLoading: false,
    class: "bg-red hover:bg-red-dark active:bg-red-dark",
  },
  {
    theme: "red",
    background: "white",
    class: "border border-red text-red hover:bg-red-light active:border-red-dark",
  },
];

export const buttonIconCompoundVariants = [
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
  {
    background: "filled",
    theme: "red",
    class: "text-white",
  },
  {
    background: "white",
    theme: "red",
    class: "text-red group-active:text-red-dark",
  },
];

export const buttonChildrenVariants = {
  isLoading: {
    true: "",
    false: "",
  },
  background: {
    filled: "",
    white: "",
  },
  theme: {
    white: "text-primary-600",
    primary: "text-white",
    "no-background": "text-primary-600 active:text-primary-900",
    red: "",
    gray: "",
  },
  size: {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base",
  },
};

export const buttonChildrenComposedVariants = [
  {
    background: "filled" as keyof (typeof buttonChildrenVariants)["background"],
    theme: "gray" as keyof (typeof buttonChildrenVariants)["theme"],
    class: "text-white",
  },
  {
    background: "white" as keyof (typeof buttonChildrenVariants)["background"],
    theme: "gray" as keyof (typeof buttonChildrenVariants)["theme"],
    class: "text-gray-extraDark",
  },
  {
    isLoading: false,
    background: "white" as keyof (typeof buttonChildrenVariants)["background"],
    theme: "red" as keyof (typeof buttonChildrenVariants)["theme"],
    class: "text-red group-active:text-red-dark",
  },
  {
    isLoading: true,
    background: "white" as keyof (typeof buttonChildrenVariants)["background"],
    theme: "red" as keyof (typeof buttonChildrenVariants)["theme"],
    class: "text-black",
  },
  {
    background: "filled" as keyof (typeof buttonChildrenVariants)["background"],
    theme: "red" as keyof (typeof buttonChildrenVariants)["theme"],
    class: "text-white",
  },
];
