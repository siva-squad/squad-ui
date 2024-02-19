import type { Meta, StoryObj } from "@storybook/react";

import { WeekItem } from "./WeekItem";

export default {
  component: WeekItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
  args: {},
  render: () => {
    return (
      <div className="flex">
        <WeekItem>日</WeekItem>
        <WeekItem>月</WeekItem>
        <WeekItem>火</WeekItem>
        <WeekItem>水</WeekItem>
        <WeekItem>木</WeekItem>
        <WeekItem>金</WeekItem>
        <WeekItem>土</WeekItem>
      </div>
    );
  },
} satisfies Meta<typeof WeekItem>;

export const Default: StoryObj<typeof WeekItem> = {};
