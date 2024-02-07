export type TextboxProps = {
  size?: "normal" | "small";
  onClick: () => void;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  value: string;
  isListOpen: boolean;
  inputLabelId: string;
  placeholder: string;
  listName: string;
  isFocus: boolean;
};
