export type DatePickerShortcut = {
  label: string;
  value: Date;
  disabled?: boolean;
};

export type DatePickerProps = {
  title?: (displayMonth: Date) => React.ReactNode;
  minDate?: Date;
  maxDate?: Date;
  value?: Date;
  shortcuts?: DatePickerShortcut[];
  onChange: (value: Date) => void;
};
