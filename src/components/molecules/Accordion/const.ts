import { tv } from "tailwind-variants";

export const ACCORDION_CONTAINER_VARIANTS = tv({
  base: "grid w-full grid-rows-[auto,1fr]",
});

export const ACCORDION_TRIGGER_VARIANTS = tv({
  base: "flex items-center gap-2 py-1 text-[14px] text-primary-600 transition-colors",
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "hover:bg-primary-50",
    },
  },
});

export const ACCORDION_ARROW_VARIANTS = tv({
  base: "h-3 w-3 text-primary-600 transition-transform",
  variants: {
    open: {
      true: "rotate-90",
      false: "rotate-0",
    },
  },
});

export const ACCORDION_CONTENT_CONTAINER_VARIANTS = tv({
  base: "overflow-hidden transition-all",
});

export const ACCORDION_CONTENT_VARIANTS = tv({
  base: "w-full transition-opacity",
  variants: {
    open: {
      true: "opacity-100",
      false: "opacity-0",
    },
  },
});
