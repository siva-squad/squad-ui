import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuContents } from "./RichMenuContents";

export default {
  component: RichMenuContents,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuContents>;

export const Default: StoryObj<typeof RichMenuContents> = {
  args: {},
};
