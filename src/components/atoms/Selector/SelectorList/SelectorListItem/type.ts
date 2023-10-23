import { OptionType } from "../../type";
import { SelectorListProps } from "../type";

export type SelectorListItemProps = {
  option: OptionType;
  isActive: boolean;
  onClick: SelectorListProps["onClick"];
};
