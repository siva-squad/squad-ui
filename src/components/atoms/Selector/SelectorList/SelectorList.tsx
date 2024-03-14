import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BaseOptionValue } from "../type";
import { SelectorListItem } from "./SelectorListItem";
import type { SelectorListProps } from "./type";

export const SelectorList = <OptionValue extends BaseOptionValue>({
  options,
  value,
  onClick,
  listHeight,
  parentRef,
}: SelectorListProps<OptionValue>) => {
  const ref = useRef<HTMLBodyElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("body");
    setMounted(true);
  }, []);

  if (!mounted || !ref.current || !parentRef.current) {
    return;
  }

  const [rect] = parentRef.current.getClientRects();
  const top = rect.y + rect.height;
  const left = rect.x;
  const width = rect.width;

  return createPortal(
    <div
      className="absolute top-0 z-[1] mt-2 flex flex-col items-start justify-start rounded bg-white py-1 shadow-03"
      style={{ maxHeight: listHeight || "13rem", width, top, left }}
    >
      <ul
        role="listbox"
        className="hidden-scrollbar w-full overflow-y-scroll"
      >
        {options.map((option) => (
          <SelectorListItem
            key={String(option.value)}
            option={option}
            isActive={option.value === value}
            disabled={option.disabled}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>,
    ref.current,
  );
};
