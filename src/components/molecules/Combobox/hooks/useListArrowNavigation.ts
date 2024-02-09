import { useEffect, useRef } from "react";

export const useListArrowNavigation = ({
  visualFocusIndex,
  length,
}: {
  visualFocusIndex: number | null;
  length: number;
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const listElementRefs = Array.from({ length }, () => useRef<HTMLLIElement>(null));

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

  return { listRef, listElementRefs };
};
