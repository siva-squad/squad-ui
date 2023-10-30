import type { Meta, StoryObj } from "@storybook/react";

import { GlobalAccount } from "./GlobalAccount";

export default {
  component: GlobalAccount,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    userId: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    teamName: {
      type: "string",
    },
  },
} satisfies Meta<typeof GlobalAccount>;

export const Default: StoryObj<typeof GlobalAccount> = {
  args: {
    userId: "1",
    userName: "田中 太郎",
    teamName: "Squad beyondチーム",
  },
};
