import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { LABEL_CLASS_NAME } from "./const";
import type { SelectorListItemProps } from "./type";

export const SelectorListItem = ({ option, isActive, onClick }: SelectorListItemProps) => {
  return (
    <li
      role="option"
      className={clsx(
        "box-border inline-flex h-10 w-full items-center justify-between truncate rounded-md bg-white px-4",
        "hover:bg-primary-100 hover:text-primary-600 focus:ring-1 focus:ring-inset focus:ring-primary-600",
      )}
      onClick={() => onClick(option)}
      tabIndex={0}
    >
      <span className={LABEL_CLASS_NAME({ isActive })}>{option.label}</span>
      {isActive && <CheckIcon className="relative h-4 w-4 text-primary-600" />}
    </li>
  );
};
