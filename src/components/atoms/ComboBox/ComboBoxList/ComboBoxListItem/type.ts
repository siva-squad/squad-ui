import { OptionType } from "../../type";
import { ComboBoxListProps } from "../type";

export type ComboBoxListItemProps = {
  option: OptionType;
  isActive: boolean;
  onClick: ComboBoxListProps["onClick"];
};
