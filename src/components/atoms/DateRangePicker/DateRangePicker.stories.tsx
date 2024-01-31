import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { DateRangePicker } from "./DateRangePicker";
import { DateRangePickerProps } from "./type";
import { addDay, addMonth } from "@/src/utils/date";

const Dummy = ({ ...args }: Partial<DateRangePickerProps>) => {
  const [value, setValue] = useState<DateRangePickerProps["value"]>({
    from: undefined,
    to: undefined,
  });
  const [changeType, setChangeType] = useState<DateRangePickerProps["changeType"] | null>(null);

  const handleSelect = (values: DateRangePickerProps["value"]) => {
    setValue(values);

    switch (changeType) {
      case "from": {
        setChangeType("to");
        break;
      }
    }
  };

  const now = new Date();

  const shortcuts = [
    { label: "今日", value: now },
    { label: "明日", value: addDay(now, 1) },
    { label: "3日後", value: addDay(now, 3) },
    { label: "5日後", value: addDay(now, 5) },
    { label: "1週間後", value: addDay(now, 7) },
    { label: "1ヶ月後", value: addMonth(now, 1) },
    { label: "3ヶ月後", value: addMonth(now, 3) },
  ];

  return (
    <div>
      <div className="flex gap-4">
        <Button
          theme={changeType === "from" ? "primary" : "white"}
          size="medium"
          onClick={() => setChangeType("from")}
        >
          {value.from
            ? `${value.from.getFullYear()}/${value.from.getMonth() + 1}/${value.from.getDate()}`
            : "チェックイン"}
        </Button>
        <Button
          theme={changeType === "to" ? "primary" : "white"}
          size="medium"
          onClick={() => setChangeType("to")}
        >
          {value.to
            ? `${value.to.getFullYear()}/${value.to.getMonth() + 1}/${value.to.getDate()}`
            : "チェックアウト"}
        </Button>
        <Button
          theme="white"
          size="medium"
          onClick={() => setChangeType(null)}
        >
          閉じる
        </Button>
      </div>
      {changeType && (
        <DateRangePicker
          value={value}
          changeType={changeType}
          onChange={handleSelect}
          shortcuts={shortcuts}
          {...args}
        />
      )}
    </div>
  );
};

export default {
  component: DateRangePicker,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof DateRangePicker>;

export const Default: StoryObj<typeof DateRangePicker> = {
  render: (args) => <Dummy {...args} />,
};
