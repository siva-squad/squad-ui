import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "./ListItem";

export default {
  component: ListItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof ListItem>;

export const Default: StoryObj<typeof ListItem> = {
  args: {},
};
