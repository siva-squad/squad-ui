import { CheckIcon } from "@assets/icons";
import type { ListboxProps } from "./type";
import clsx from "clsx";

export const Listbox = ({
  options,
  listName,
  onClick,
  selectedElementId,
  visualFocusIndex,
}: ListboxProps) => {
  return (
    <ul
      role="listbox"
      aria-label={listName}
      className="inline-flex w-full flex-col items-start justify-start rounded bg-white shadow-03 max-h-52 scroll-auto overflow-y-scroll"
      id={listName}
    >
      {options.map(({ name, id }, index) => (
        <li
          onClick={() => onClick({ name, id })}
          aria-selected={id === selectedElementId}
          role="option"
          key={id}
          id={id}
          className={clsx(
            "flex w-full items-center justify-between gap-2 px-4 py-3.5 text-xs",
            visualFocusIndex === index && "bg-primary-100 text-primary-600",
          )}
        >
          <span>{name}</span>
          {id === selectedElementId && <CheckIcon className="h-4 w-4 stroke-1 text-primary-600" />}
        </li>
      ))}
    </ul>
  );
};
