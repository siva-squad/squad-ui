import type { Meta, StoryObj } from "@storybook/react";

import { DayItem } from "./DayItem";

export default {
  component: DayItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onClick: { action: "clicked" },
    theme: {
      type: "string",
      options: ["selected", "selectedFrom", "selectedTo", "today"],
      control: {
        type: "select",
      },
    },
    transition: {
      type: "boolean",
    },
  },
  args: {
    date: new Date(),
    transition: false,
  },
} satisfies Meta<typeof DayItem>;

export const Default: StoryObj<typeof DayItem> = {};
