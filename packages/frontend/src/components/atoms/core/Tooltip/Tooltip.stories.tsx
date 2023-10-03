import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";

export default {
  component: Tooltip,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Tooltip>;

export const Default: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    text: "メッセージテキスト",
    direction: "bottom",
    position: "center",
  },
};
