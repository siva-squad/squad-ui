export type TextboxProps = {
  size?: "normal" | "small";
  onClick: () => void;
  disabled: boolean;
  onChange: (event: React.ChangeEvent) => void;
  value: string;
};
