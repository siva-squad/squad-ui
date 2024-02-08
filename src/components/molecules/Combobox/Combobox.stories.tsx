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
    ],
  },
};

export const LongList: StoryObj<typeof Combobox> = {
  args: {
    listName: "Test list 2",
    disabled: false,
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
        id: "12",
        name: "Option 12",
      },
      {
        id: "22",
        name: "Option 22",
      },
      {
        id: "32",
        name: "Option 32",
      },
      {
        id: "42",
        name: "Option 42",
      },
    ],
  },
};
