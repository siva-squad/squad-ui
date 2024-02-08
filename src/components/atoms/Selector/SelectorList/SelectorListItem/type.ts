import { BaseOptionValue, OptionType } from "../../type";
import { SelectorListProps } from "../type";

export type SelectorListItemProps<OptionValue extends BaseOptionValue> = {
  option: OptionType<OptionValue>;
  isActive: boolean;
  disabled?: boolean;
  onClick: SelectorListProps<OptionValue>["onClick"];
};
