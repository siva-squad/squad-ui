import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Avatar>;

export const Default: StoryObj<typeof Avatar> = {
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: {
    src: "",
  },
};
