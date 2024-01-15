import { BaseOptionValue } from "../type";
import { SelectorListItem } from "./SelectorListItem";
import type { SelectorListProps } from "./type";

export const SelectorList = <OptionValue extends BaseOptionValue>({ options, value, onClick }: SelectorListProps<OptionValue>) => {
  return (
    <ul
      role="listbox"
      className="z-[1] flex h-52 w-full flex-col items-start justify-start rounded bg-white py-1 shadow-03"
    >
      {options.map((option) => (
        <SelectorListItem
          key={String(option.value)}
          option={option}
          isActive={option.value === value}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
