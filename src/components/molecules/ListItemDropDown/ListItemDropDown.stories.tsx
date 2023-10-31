import type { Meta, StoryObj } from "@storybook/react";

import { ListItemDropDown } from "./ListItemDropDown";

export default {
  component: ListItemDropDown,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof ListItemDropDown>;

export const Default: StoryObj<typeof ListItemDropDown> = {
  args: {},
};


