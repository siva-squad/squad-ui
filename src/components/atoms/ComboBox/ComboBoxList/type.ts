import { OptionType } from "../type";

export type ComboBoxListProps = {
  options: OptionType[];
  activeId: OptionType["id"] | null;
  onClick: (option: OptionType) => void;
};
