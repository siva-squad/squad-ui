import { Option } from "./Listbox/type";

export type ComboboxProps = {
  options: Option[];
  labelText: string;
  listName: string;
  isRequired: boolean;
  onSelect: (option: Option) => void;
  badgeText?: string;
  disabled?: boolean;
  placeholder?: string;
  size?: "normal" | "small";
  description?: string;
};
