export const buttonBaseVariants = {
  showIcon: {
    true: "",
    false: "",
  },
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
    red: "shadow-01",
    gray: "shadow-01",
    underline: "hover:bg-gray-extraLight",
  },
  size: {
    small: "px-2 py-1.5",
    medium: "px-4 py-2",
    large: "px-4 py-3",
  },
};

export const buttonIconVariants = {
  background: {
    filled: "",
    white: "",
  },
  theme: {
    white: "text-primary-600",
    primary: "text-gray-light",
    "no-background": "text-primary-600",
    red: "",
    gray: "",
    underline:
      "text-primary-600 underline underline-primary-600 active:text-primary-900 active:underline-primary-900",
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
};

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
    underline:
      "text-primary-600 underline underline-primary-600 active:text-primary-900 active:underline-primary-900",
  },
  size: {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base",
  },
};
