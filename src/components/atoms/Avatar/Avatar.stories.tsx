import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      type: "number",
      defaultValue: 32,
    },
  },
} satisfies Meta<typeof Avatar>;

export const Default: StoryObj<typeof Avatar> = {};

export const NoClick: StoryObj<typeof Avatar> = {
  args: {
    onClick: undefined,
  },
};
