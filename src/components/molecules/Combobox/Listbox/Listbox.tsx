import type { ListboxProps } from "./type";

import { ListElement } from "./ListElement";

export const Listbox = ({
  options,
  listName,
  onClick,
  selectedElementId,
  visualFocusIndex,
  onMouseOver,
}: ListboxProps) => {
  return (
    <ul
      role="listbox"
      aria-label={listName}
      className="inline-flex w-full flex-col items-start justify-start rounded bg-white shadow-03 max-h-52 scroll-auto overflow-y-scroll"
      id={listName}
    >
      {options.map(({ name, id }, index) => (
        <ListElement
          id={id}
          key={id}
          onClick={() => onClick({ name, id })}
          onMouseOver={() => onMouseOver(index)}
          isSelected={id === selectedElementId}
          hasVisualFocus={visualFocusIndex === index}
          name={name}
        />
      ))}
    </ul>
  );
};
