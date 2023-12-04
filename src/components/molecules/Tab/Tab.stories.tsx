import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from "./Tab";

export default {
  component: Tab,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Tab>;

export const Default: StoryObj<typeof Tab> = {
  args: {},
};


