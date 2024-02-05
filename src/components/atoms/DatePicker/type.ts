export type DatePickerShortcut = {
  label: string;
  value: Date;
};

export type DatePickerProps = {
  value?: Date;
  shortcuts?: DatePickerShortcut[];
  onChange: (value: Date) => void;
};
