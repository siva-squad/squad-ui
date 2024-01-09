import type { Meta, StoryObj } from "@storybook/react";

import { Listbox } from "./Listbox";

export default {
  component: Listbox,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Listbox>;

export const Default: StoryObj<typeof Listbox> = {
  args: {
    listName: "Example list",
    options: [
      {
        name: "Option one",
        id: "123",
        isSelected: false,
      },
      {
        name: "Option two",
        id: "1234",
        isSelected: true,
      },
      {
        name: "Option three",
        id: "1233",
        isSelected: false,
      },
    ],
  },
};
