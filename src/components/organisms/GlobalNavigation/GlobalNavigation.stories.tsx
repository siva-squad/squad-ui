import type { Meta, StoryObj } from "@storybook/react";

import { GlobalNavigation } from "./GlobalNavigation";

export default {
  component: GlobalNavigation,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof GlobalNavigation>;

export const Default: StoryObj<typeof GlobalNavigation> = {
  args: {
    items: [
      { href: "", title: "テキスト", id: "1" },
      { href: "", title: "テキスト", id: "2" },
    ],
  },
};
