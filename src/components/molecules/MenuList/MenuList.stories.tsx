import type { Meta, StoryObj } from "@storybook/react";

import { MenuListSlot } from "./MenuList";

export default {
  component: MenuListSlot,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof MenuListSlot>;

export const Default: StoryObj<typeof MenuListSlot> = {
  args: {},
};
