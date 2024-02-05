import { DatePickerShortcut } from "@atoms/DatePicker";

export type DateRangePickerValue = {
  from?: Date;
  to?: Date;
};

export type DateRangePickerProps = {
  value: { from?: Date; to?: Date };
  changeType: "from" | "to";
  shortcuts?: DatePickerShortcut[];
  onChange: (value: { from?: Date; to?: Date }) => void;
};
