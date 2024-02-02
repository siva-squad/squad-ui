import { tv } from "tailwind-variants";

export const DAY_ITEM_VARIANTS = tv({
  base: "relative grid h-9 w-9 place-items-center rounded-full text-sm",
  variants: {
    theme: {
      selectedFrom:
        "rounded-full bg-primary-600  font-bold text-white before:absolute before:right-[-7px] before:z-[-1] before:h-full before:w-[calc(50%_+_7px)] before:border-y before:border-primary-400 before:bg-primary-100 before:content-[''] ",
      selectedTo:
        "rounded-full bg-primary-600 font-bold text-white before:absolute before:left-[-7px] before:z-[-1] before:h-full before:w-[calc(50%_+_7px)] before:border-y before:border-primary-400 before:bg-primary-100 before:content-[''] ",
      selected: "rounded-full bg-primary-600  font-bold text-white",
      range:
        "text-gray-dark before:absolute before:left-[-7px] before:z-[-1] before:h-full before:w-[calc(100%_+_14px)] before:border-y before:border-primary-400 before:bg-primary-100 before:content-['']",
      today:
        "rounded-full border border-gray-light text-gray-dark hover:border-primary-400 hover:text-primary-600",
      default:
        "rounded-full border-white text-gray-dark hover:border hover:border-primary-400 hover:text-primary-600",
    },
    transition: {
      true: "transition-colors duration-300",
      false: "",
    },
  },
  defaultVariants: {
    theme: "default",
  },
});

export const DAY_ITEM_SIZE = {
  width: 50,
  height: 44,
};
