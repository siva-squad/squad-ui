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
      },
      {
        name: "Option two",
        id: "1234",
      },
      {
        name: "Option three",
        id: "1233",
      },
    ],
  },
};

export const ScrollableList: StoryObj<typeof Listbox> = {
  args: {
    listName: "Example list",
    options: [
      {
        name: "Option one",
        id: "123",
      },
      {
        name: "Option two",
        id: "1234",
      },
      {
        name: "Option three",
        id: "1233",
      },
      {
        name: "Option four",
        id: "12",
      },
      {
        name: "Option five",
        id: "124",
      },
      {
        name: "Option six",
        id: "233",
      },
    ],
  },
};
