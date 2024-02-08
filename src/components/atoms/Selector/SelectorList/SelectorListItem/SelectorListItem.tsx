import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { BaseOptionValue } from "../../type";
import { LABEL_CLASS_NAME } from "./const";
import type { SelectorListItemProps } from "./type";

export const SelectorListItem = <OptionValue extends BaseOptionValue>({
  option,
  isActive,
  onClick,
  disabled = false,
}: SelectorListItemProps<OptionValue>) => {
  return (
    <li
      role="option"
      className={clsx(
        "box-border inline-flex h-10 w-full items-center justify-between truncate rounded-md bg-white px-4",
        "hover:bg-primary-100 hover:text-primary-600 focus:ring-1 focus:ring-inset focus:ring-primary-600",
        disabled && "pointer-events-none cursor-default text-gray-extraDark no-underline",
      )}
      onClick={() => onClick(option)}
      tabIndex={0}
    >
      <span className={LABEL_CLASS_NAME({ isActive, disabled })}>{option.label}</span>
      {isActive && <CheckIcon className="relative h-4 w-4 text-primary-600" />}
    </li>
  );
};
