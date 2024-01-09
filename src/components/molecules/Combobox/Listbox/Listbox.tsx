import { CheckIcon } from "@assets/icons";
import type { ListboxProps } from "./type";

export const Listbox = ({ options, listName }: ListboxProps) => {
  return (
    <ul
      role="listbox"
      aria-label={listName}
      className="inline-flex w-full flex-col items-start justify-start rounded bg-white shadow-03"
    >
      {options.map(({ name, id, isSelected }) => (
        <li
          aria-selected={isSelected}
          role="option"
          key={id}
          className=" flex w-full items-center justify-between gap-2 px-4 py-3.5 text-xs hover:bg-primary-100 hover:text-primary-600"
        >
          <span>{name}</span>

          {isSelected && <CheckIcon className="h-4 w-4 stroke-1 text-primary-600" />}
        </li>
      ))}
    </ul>
  );
};
