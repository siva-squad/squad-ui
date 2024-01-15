import { BaseOptionValue, OptionType } from "../type";

export type SelectorListProps<OptionValue extends BaseOptionValue> = {
  options: OptionType<OptionValue>[];
  value?: OptionValue
  onClick: (option: OptionType<OptionValue>) => void;
};
