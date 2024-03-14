import { BaseOptionValue } from "../type";
import { SelectorListItem } from "./SelectorListItem";
import type { SelectorListProps } from "./type";

export const SelectorList = <OptionValue extends BaseOptionValue>({
  options,
  value,
  onClick,
  listHeight,
}: SelectorListProps<OptionValue>) => {
  return (
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
    </div>
  );
};
