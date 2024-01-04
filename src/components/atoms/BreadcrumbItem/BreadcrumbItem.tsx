import { clsx } from "clsx";

import type { BreadcrumbItemProps } from "./type";

export const BreadcrumbItem = ({
  children,
  clickable = true,
  disabledLastStyle = false,
}: BreadcrumbItemProps) => {
  return (
    <li
      className={clsx(
        "cursor-pointer list-none text-xs font-regular leading-none text-gray-dark",
        "hover:underline",
        "focus:underline",
        "active:text-gray-extraDark active:underline",
        !disabledLastStyle &&
          "last:pointer-events-none last:cursor-default last:text-gray-extraDark last:no-underline",
        !clickable && "hover:no-underline",
      )}
    >
      {children}
    </li>
  );
};
