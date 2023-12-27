import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "./Popover";

export default {
  component: Popover,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Popover>;

export const Default: StoryObj<typeof Popover> = {
  args: {},
};


