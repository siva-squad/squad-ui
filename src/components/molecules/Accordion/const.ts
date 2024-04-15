import { tv } from "tailwind-variants";

export const ACCORDION_CONTAINER_VARIANTS = tv({
  base: "grid w-full transition-[grid-template-rows]",
  variants: {
    open: {
      true: "grid-rows-[auto,1fr]",
      false: "grid-rows-[auto,0fr]",
    },
  },
});

export const ACCORDION_TRIGGER_VARIANTS = tv({
  base: "flex items-center gap-2 py-1 text-[14px] text-blue transition-colors",
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "text-blue hover:bg-primary-50",
    },
  },
});

export const ACCORDION_ARROW_VARIANTS = tv({
  base: "h-3 w-3 text-blue transition-transform",
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
