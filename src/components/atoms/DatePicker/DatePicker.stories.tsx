import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { DatePicker } from "./DatePicker";
import { DatePickerProps } from "./type";
import { addDay, addMonth } from "@/src/utils/date";

const Dummy = ({ ...args }: Partial<DatePickerProps>) => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const [isOpen, setOpen] = useState(false);

  const handleSelect = (values: DatePickerProps["value"]) => {
    console.log(values);
    setValue(values);
  };

  const now = new Date();

  const shortcuts = [
    { label: "今日", value: now },
    { label: "明日", value: addDay(now, 1) },
    { label: "3日後", value: addDay(now, 3), disabled: true },
    { label: "5日後", value: addDay(now, 5) },
    { label: "1週間後", value: addDay(now, 7) },
    { label: "1ヶ月後", value: addMonth(now, 1) },
    { label: "3ヶ月後", value: addMonth(now, 3) },
  ];

  return (
    <div>
      <div className="flex gap-4">
        <Button
          theme={isOpen ? "primary" : "white"}
          size="medium"
          onClick={() => setOpen(true)}
        >
          公開日を設定
        </Button>
        <Button
          theme="white"
          size="medium"
          onClick={() => setOpen(false)}
        >
          閉じる
        </Button>
      </div>
      {isOpen && (
        <DatePicker
          {...args}
          value={value}
          onChange={handleSelect}
          shortcuts={shortcuts}
        />
      )}
    </div>
  );
};

export default {
  component: DatePicker,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof DatePicker>;

export const Default: StoryObj<typeof DatePicker> = {
  render: (args) => <Dummy {...args} />,
};

export const MinDate: StoryObj<typeof DatePicker> = {
  render: (args) => (
    <Dummy
      {...args}
      minDate={new Date()}
    />
  ),
};

export const MaxDate: StoryObj<typeof DatePicker> = {
  render: (args) => (
    <Dummy
      {...args}
      maxDate={new Date()}
    />
  ),
};

export const CustomTitle: StoryObj<typeof DatePicker> = {
  render: (args) => (
    <Dummy
      {...args}
      title={(date) => (
        <div className="text-red">{`${date.getFullYear()}年${date.getMonth() + 1}月`}</div>
      )}
    />
  ),
};
