import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuContent } from "./RichMenuContent";

export default {
  component: RichMenuContent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuContent>;

export const Default: StoryObj<typeof RichMenuContent> = {
  args: {},
};


