import { ComboBoxListItem } from "./ComboBoxListItem";
import type { ComboBoxListProps } from "./type";

export const ComboBoxList = ({ options, activeId, onClick }: ComboBoxListProps) => {
  return (
    <ul
      role="listbox"
      className="z-[1] flex h-52 w-full flex-col items-start justify-start rounded bg-white py-1 shadow-03"
    >
      {options.map((option) => (
        <ComboBoxListItem
          key={option.id}
          option={option}
          isActive={option.id === activeId}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
