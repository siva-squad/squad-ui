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
    inputLabelId: "123",
    placeholder: "Option 456",
    size: "normal",
    isRequired: true,
    options: [
      {
        id: "1",
        isSelected: false,
        name: "Option 1",
      },
      {
        id: "2",
        isSelected: false,
        name: "Option 2",
      },
      {
        id: "3",
        isSelected: false,
        name: "Option 3",
      },
      {
        id: "4",
        isSelected: false,
        name: "Option 4",
      },
    ],
  },
};
