import { clsx } from "clsx";

import type { BreadcrumbItemProps } from "./type";

export const BreadcrumbItem = ({ children }: BreadcrumbItemProps) => {
  return (
    <li
      className={clsx(
        "cursor-pointer list-none text-xs font-regular leading-none text-gray-dark",
        "hover:underline",
        "focus:underline",
        "active:text-gray-extraDark active:underline",
        "last:pointer-events-none last:cursor-default last:text-gray-extraDark last:no-underline",
      )}
    >
      {children}
    </li>
  );
};
