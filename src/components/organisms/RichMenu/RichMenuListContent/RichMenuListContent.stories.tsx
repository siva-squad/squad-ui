import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuListContent } from "./RichMenuListContent";

export default {
  component: RichMenuListContent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuListContent>;

export const Default: StoryObj<typeof RichMenuListContent> = {
  args: {},
};


