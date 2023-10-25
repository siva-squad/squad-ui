import clsx from "clsx";
import type { CommonListItemProps } from "./type";

export const CommonListItem = ({ children, icon, onClick }: CommonListItemProps) => {
  return (
    <button
      className={clsx(
        "group flex w-full items-center gap-x-2 rounded border-primary-600 p-1 py-2.5 outline-none",
        "hover:bg-gray-light",
        "focus-visible:border-2",
      )}
      onClick={onClick}
    >
      {icon && <span className="h-4 w-4 text-gray group-active:text-primary-600">{icon}</span>}
      {children && (
        <span className="text-xs font-medium text-gray-extraDark group-active:text-primary-600">
          {children}
        </span>
      )}
    </button>
  );
};
