import type { Meta, StoryObj } from "@storybook/react";

import { Area } from "./Area";

export default {
  component: Area,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Area>;

export const Default: StoryObj<typeof Area> = {
  args: {
    children: "With a little bit of text",
  },
};
