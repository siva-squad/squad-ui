import type { Meta, StoryObj } from "@storybook/react";

import { ComboBox } from "./ComboBox";

export default {
  component: ComboBox,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof ComboBox>;

export const Default: StoryObj<typeof ComboBox> = {
  args: {},
};


