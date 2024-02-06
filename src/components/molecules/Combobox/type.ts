import { Option } from "./Listbox/type";

export type ComboboxProps = {
  options: Option[];
  listName: string;
  isRequired: boolean;
  badgeText?: string;
  disabled?: boolean;
  placeholder?: string;
  size?: "normal" | "small";
};
