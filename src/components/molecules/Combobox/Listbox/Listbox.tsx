import type { ListboxProps } from "./type";
import { ListElement } from "./ListElement";
import { useListArrowNavigation } from "../hooks";

export const Listbox = ({
  options,
  listName,
  onClick,
  selectedElementId,
  visualFocusIndex,
  onMouseOver,
}: ListboxProps) => {
  const { listRef, listElementRefs } = useListArrowNavigation({
    visualFocusIndex,
    length: options.length,
  });

  return (
    <ul
      ref={listRef}
      role="listbox"
      aria-label={listName}
      className="inline-flex w-full flex-col items-start justify-start rounded bg-white shadow-03 max-h-56 scroll-auto overflow-y-scroll"
      id={listName}
    >
      {options.map(({ name, id }, index) => {
        return (
          <ListElement
            id={id}
            key={id}
            onClick={() => onClick({ name, id })}
            onMouseOver={() => onMouseOver(index)}
            isSelected={id === selectedElementId}
            hasVisualFocus={visualFocusIndex === index}
            name={name}
            ref={listElementRefs[index]}
          />
        );
      })}
    </ul>
  );
};
