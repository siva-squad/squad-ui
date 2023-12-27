import clsx from "clsx";
import { tv } from "tailwind-variants";

export const POPOVER_CONTENT_CLASS_NAME = tv({
  base: "absolute",
  variants: {
    position: {
      bottomRight: clsx("left-0 mt-2"),
      bottomLeft: clsx("right-0 mt-2"),
      bottom: clsx("left-1/2 -translate-x-1/2"),
      top: clsx("bottom-full left-1/2 mb-2 -translate-x-1/2"),
      topLeft: clsx("bottom-full right-0 mb-2"),
      topRight: clsx("bottom-full left-0 mb-2"),
      right: clsx("left-full top-1/2 ml-2 -translate-y-1/2"),
      rightTop: clsx("left-full ml-2 -translate-y-full"),
      rightBottom: clsx("left-full top-0 ml-2 translate-y-0"),
      left: clsx("right-full top-1/2 mr-2 -translate-y-1/2"),
      leftTop: clsx("right-full mr-2 -translate-y-full"),
      leftBottom: clsx("right-full top-0 mr-2 translate-y-0"),
    },
  },
});
export const POPOVER_WRAPPER_CLASS_NAME = tv({
  base: "",
  variants: {
    position: {
      bottomRight: clsx("pt-2"),
      bottomLeft: clsx("pt-2"),
      bottom: clsx("pt-2"),
      top: clsx("pb-2"),
      topLeft: clsx("pb-2"),
      topRight: clsx("pb-2"),
      right: clsx("pl-2"),
      rightTop: clsx("pl-2"),
      rightBottom: clsx("pl-2"),
      left: clsx("pr-2"),
      leftTop: clsx("pr-2"),
      leftBottom: clsx("pr-2"),
    },
  },
});
