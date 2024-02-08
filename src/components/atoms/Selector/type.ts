type LabelType = string;

export type BaseOptionValue = string | number | boolean;

export type OptionType<OptionValue extends BaseOptionValue> = {
  label: LabelType;
  value: OptionValue;
  disabled?: boolean;
};

export type SelectorProps<OptionValue extends BaseOptionValue> = {
  size: "small" | "normal";
  options: OptionType<OptionValue>[];
  value?: OptionValue;
  placeholder: LabelType;
  disabled?: boolean;
  onSelect: (value: OptionValue) => void;
};
