import { clsx } from "clsx";

import type { TooltipProps } from "./type";

export const Tooltip = ({ direction, position, text }: TooltipProps) => {
  return (
    <div className="shadow inline-flex h-11 w-36 flex-col items-center justify-center">
      <div className="bg-white inline-flex items-center justify-start gap-2.5 rounded p-2">
        <div className="text-neutral-900 font-['Noto Sans CJK JP'] text-sm font-normal leading-snug">
          {text}
        </div>
      </div>
    </div>
  );
};
