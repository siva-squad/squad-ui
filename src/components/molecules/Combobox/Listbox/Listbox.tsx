import type { ListboxProps } from "./type";

export const Listbox = ({ options, listName }: ListboxProps) => {
  return (
    <ul
      role="listbox"
      aria-label={listName}
    >
      {options.map(({ name, id, isSelected }) => (
        <li
          aria-selected={isSelected}
          role="option"
          key={id}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};
