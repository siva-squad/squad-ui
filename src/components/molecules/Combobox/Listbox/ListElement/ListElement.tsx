import { CheckIcon } from "@assets/icons";

import clsx from "clsx";
import { ListElementProps } from "./type";

export const ListElement = ({
  onClick,
  isSelected,
  id,
  hasVisualFocus,
  onMouseOver,
  name,
}: ListElementProps) => {
  return (
    <li
      onClick={onClick}
      aria-selected={isSelected}
      role="option"
      id={id}
      className={clsx(
        "flex w-full items-center justify-between gap-2 px-4 py-3.5 text-xs",
        hasVisualFocus && "bg-primary-100 text-primary-600",
      )}
      onMouseOver={onMouseOver}
    >
      <span>{name}</span>
      {isSelected && <CheckIcon className="h-4 w-4 stroke-1 text-primary-600" />}
    </li>
  );
};
