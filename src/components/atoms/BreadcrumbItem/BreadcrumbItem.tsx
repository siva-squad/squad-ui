import { clsx } from "clsx";

import type { BreadcrumbItemProps } from "./type";

export const BreadcrumbItem = ({ children }: BreadcrumbItemProps) => {
  return (
    <div
      className={clsx(
        "text-xs font-regular leading-none text-gray-dark",
        "hover:underline",
        "focus:underline",
        "active:text-gray-extraDark active:underline",
      )}
    >
      {children}
    </div>
  );
};
