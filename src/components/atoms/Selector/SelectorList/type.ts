import { BaseOptionValue, OptionType } from "../type";

export type SelectorListProps<OptionValue extends BaseOptionValue> = {
  options: OptionType<OptionValue>[];
  value?: OptionValue;
  listHeight?: number;
  onClick: (option: OptionType<OptionValue>) => void;
};
