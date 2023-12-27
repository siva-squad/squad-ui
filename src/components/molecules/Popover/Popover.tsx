import { clsx } from "clsx";

import type { PopoverProps } from "./type";

// TODO: HTMLのpopoverで対応したい
export const Popover = ({ children, content, trigger }: PopoverProps) => {
  return (
    <div className="group relative">
      <div className="peer w-fit">{children}</div>

      {/* 
          bottomRight: mt-2 left-0
          bottomLeft: mt-2 right-0
          bottom: mt-2 left-1/2 -translate-x-1/2

          top: bottom-full left-1/2 mb-2 -translate-x-1/2
          topLeft: bottom-full right-0 mb-2
          topRight: bottom-full left-0 mb-2

          right: left-full top-1/2 ml-2 -translate-y-1/2
          rightTop: left-full ml-2 -translate-y-full
          rightBottom: left-full top-0 ml-2 translate-y-0

          left: right-full top-1/2 mr-2 -translate-y-1/2
          leftTop: right-full mr-2 -translate-y-full
          leftBottom: right-full top-0 mr-2 translate-y-0
      */}
      <div className={clsx("absolute hidden hover:flex peer-hover:flex", "left-0")}>
        <div className="pt-2">{content}</div>
      </div>
    </div>
  );
};
