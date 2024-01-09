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
  args: {},
};


