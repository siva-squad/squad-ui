import { SelectorListItem } from "./SelectorListItem";
import type { SelectorListProps } from "./type";

export const SelectorList = ({ options, activeId, onClick }: SelectorListProps) => {
  return (
    <ul
      role="listbox"
      className="z-[50] flex h-52 w-full flex-col items-start justify-start rounded bg-white py-1 shadow-03"
    >
      {options.map((option) => (
        <SelectorListItem
          key={option.id}
          option={option}
          isActive={option.id === activeId}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
