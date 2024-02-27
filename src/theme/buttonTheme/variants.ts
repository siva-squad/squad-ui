export const buttonBaseVariants = {
  theme: {
    red: "",
    primary: "",
    gray: "",
  },
  size: {
    small: "px-2 py-1.5",
    medium: "px-4 py-2",
    large: "px-4 py-3",
  },
  isLoading: {
    true: "cursor-not-allowed",
    false: "",
  },
  isDisabled: {
    true: "opacity-20 cursor-not-allowed",
    false: "",
  },
  hasChildren: {
    true: "text-center font-medium leading-none",
    false: "",
  },
  variant: {
    fill: "",
    outline: "",
    text: "px-1 py-0.5",
    underline: "",
  },
  showIcon: {
    true: "",
    false: "",
  },
};

export const buttonIconVariants = {
  size: {
    small: "h-3 w-3",
    medium: "h-4 w-4",
    large: "h-6 w-6",
  },
  hasChildren: {
    true: "",
    false: "",
  },
  variant: {
    fill: "",
    outline: "",
    text: "",
    underline: "underline",
  },
};

export const buttonChildrenVariants = {
  size: {
    small: "text-xs leading-3",
    medium: "text-s",
    large: "text-base",
  },
  variant: {
    fill: "",
    outline: "",
    text: "",
    underline: "underline",
  },
};
