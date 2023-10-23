import { OptionType } from "../type";

export type SelectorListProps = {
  options: OptionType[];
  activeId: OptionType["id"] | null;
  onClick: (option: OptionType) => void;
};
