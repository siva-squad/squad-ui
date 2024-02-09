import type { ListboxProps } from "./type";
import { ListElement } from "./ListElement";
import { useEffect, useRef } from "react";

export const Listbox = ({
  options,
  listName,
  onClick,
  selectedElementId,
  visualFocusIndex,
  onMouseOver,
}: ListboxProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const listElementRefs = Array.from({ length: options.length }, () => useRef<HTMLLIElement>(null));

  useEffect(() => {
    if (!listRef.current || visualFocusIndex === null) {
      return;
    }

    const currentFocusedElement = listElementRefs[visualFocusIndex].current;

    if (!currentFocusedElement) {
      return;
    }

    const listPosition = listRef.current.getBoundingClientRect();
    const listElementPosition = currentFocusedElement.getBoundingClientRect();

    if (
      listElementPosition.bottom > listPosition.bottom ||
      listElementPosition.top < listPosition.top
    ) {
      currentFocusedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [listRef, visualFocusIndex, listElementRefs]);

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
