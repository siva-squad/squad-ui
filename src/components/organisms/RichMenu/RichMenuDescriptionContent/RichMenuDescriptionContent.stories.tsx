import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuDescriptionContent } from "./RichMenuDescriptionContent";

export default {
  component: RichMenuDescriptionContent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuDescriptionContent>;

export const Default: StoryObj<typeof RichMenuDescriptionContent> = {
  args: {},
};


