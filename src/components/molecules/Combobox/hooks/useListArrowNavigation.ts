import { useEffect, useRef } from "react";

export const useListArrowNavigation = ({ hasVisualFocus }: { hasVisualFocus: boolean }) => {
  const listElementRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!listElementRef.current || !hasVisualFocus) {
      return;
    }

    const parentElement = listElementRef.current.parentElement;

    if (!parentElement) {
      return;
    }

    const parentElementPosition = parentElement?.getBoundingClientRect();
    const listElementPosition = listElementRef.current.getBoundingClientRect();

    if (
      listElementPosition.bottom > parentElementPosition.bottom ||
      listElementPosition.top < parentElementPosition.top
    ) {
      listElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [listElementRef, hasVisualFocus]);

  return { listElementRef };
};
