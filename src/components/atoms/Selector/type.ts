type LabelType = string;
type ValueType = string | number;

export type OptionType = {
  id: number | string;
  label: LabelType;
  value: ValueType;
};

export type SelectorProps = {
  size: "small" | "normal";
  options: OptionType[];
  defaultLabel: LabelType;
  disabled?: boolean;
  onSelect: (value: ValueType) => void;
};
