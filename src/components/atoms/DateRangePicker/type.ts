export type DateRangePickerValue = {
  from?: Date;
  to?: Date;
};

type DateRangePickerShortcut = {
  label: string;
  value: Date;
};

export type DateRangePickerProps = {
  value: { from?: Date; to?: Date };
  changeType: "from" | "to";
  shortcuts?: DateRangePickerShortcut[];
  onChange: (value: { from?: Date; to?: Date }) => void;
};
