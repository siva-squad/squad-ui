import type { Meta, StoryObj } from "@storybook/react";

import { RichMenu } from "./";

export default {
  component: RichMenu,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenu>;

export const Default: StoryObj<typeof RichMenu> = {
  args: {},
};
