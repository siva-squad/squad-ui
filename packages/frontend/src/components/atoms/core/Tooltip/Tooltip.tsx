//import { clsx } from "clsx";

import type { TooltipProps } from "./type";

export const Tooltip = ({ direction, position, text }: TooltipProps) => {
  return (
    <div className="inline-flex items-center justify-center rounded p-2 text-sm leading-normal shadow-04">
      {text}
    </div>
  );
};
