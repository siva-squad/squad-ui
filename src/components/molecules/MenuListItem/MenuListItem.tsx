import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { MenuListItemProps } from "./type";

export const MenuListItem = ({
  type = "dropdown",
  description,
  chevron,
  children,
  icon,
  disabled,
  selected = false,
  onClick,
}: MenuListItemProps) => {
  return (
    <button
      className={clsx(
        "group flex h-8 w-fit items-center gap-x-2 rounded px-2",
        "hover:bg-gray-extraLight",
        "disabled:cursor-not-allowed disabled:opacity-20",
        "border-primary-600 focus:border",
        "outline-none",
        { "bg-primary-50": selected },
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && (
        <span
          className={clsx("h-4 w-4 text-gray group-enabled:group-active:text-primary-600", {
            "text-primary-600": selected,
          })}
        >
          {icon}
        </span>
      )}
      <span
        className={clsx(
          "text-sm font-medium text-gray-dark",
          "group-enabled:group-active:text-primary-600",
          {
            "text-primary-600": selected,
          },
        )}
      >
        {children}
      </span>
      {chevron && <ChevronDownIcon className="h-4 w-4 text-gray-dark" />}
    </button>
  );
};
