import type { Meta, StoryObj } from "@storybook/react";

import { Textbox } from "./Textbox";

export default {
  component: Textbox,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Textbox>;

export const Default: StoryObj<typeof Textbox> = {
  args: {},
};
