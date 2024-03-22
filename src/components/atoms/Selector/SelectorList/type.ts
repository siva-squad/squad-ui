import { BaseOptionValue, OptionType } from "../type";

export type SelectorListProps<OptionValue extends BaseOptionValue> = {
  options: OptionType<OptionValue>[];
  value?: OptionValue;
  defaultValue?: OptionValue;
  listHeight?: number;
  rect?: DOMRect;
  onClick: (option: OptionType<OptionValue>) => void;
};
