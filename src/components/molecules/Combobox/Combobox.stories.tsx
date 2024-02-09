import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "./Combobox";

export default {
  component: Combobox,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Combobox>;

export const Default: StoryObj<typeof Combobox> = {
  args: {
    listName: "Test list",
    disabled: false,
    placeholder: "Option 456",
    size: "normal",
    isRequired: true,
    options: [
      {
        id: "1",
        name: "Option 1",
      },
      {
        id: "2",
        name: "Option 2",
      },
      {
        id: "3",
        name: "Option 3",
      },
      {
        id: "4",
        name: "Option 4",
      },
      {
        id: "5",
        name: "Option 5",
      },
    ],
  },
};

export const LongList: StoryObj<typeof Combobox> = {
  args: {
    listName: "States",
    disabled: false,
    size: "normal",
    isRequired: true,
    options: [
      {
        id: "1",
        name: "Alabama",
      },
      {
        id: "2",
        name: "Alaska",
      },
      {
        id: "3",
        name: "Arizona",
      },
      {
        id: "4",
        name: "Arkansas",
      },
      {
        id: "5",
        name: "California",
      },
      {
        id: "6",
        name: "Colorado",
      },
      {
        id: "7",
        name: "Connecticut",
      },
      {
        id: "8",
        name: "Delaware",
      },
      {
        id: "9",
        name: "Columbia",
      },
      {
        id: "10",
        name: "Florida",
      },
      {
        id: "11",
        name: "Georgia",
      },
      {
        id: "12",
        name: "Guam",
      },
      {
        id: "13",
        name: "Hawaii",
      },
      {
        id: "14",
        name: "Idaho",
      },
      {
        id: "15",
        name: "Indiana",
      },
      {
        id: "16",
        name: "Kansas",
      },
    ],
  },
};
