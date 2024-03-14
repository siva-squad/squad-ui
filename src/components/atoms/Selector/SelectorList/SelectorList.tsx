import { BaseOptionValue } from "../type";
import { SelectorListItem } from "./SelectorListItem";
import type { SelectorListProps } from "./type";

export const SelectorList = <OptionValue extends BaseOptionValue>({
  options,
  value,
  onClick,
}: SelectorListProps<OptionValue>) => {
  return (
    <div className="z-[1] flex h-52 w-full flex-col items-start justify-start rounded bg-white py-1 shadow-03">
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
