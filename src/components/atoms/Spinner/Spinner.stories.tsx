import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./Spinner";

export default {
  component: Spinner,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Spinner>;

export const Default: StoryObj<typeof Spinner> = {
  argTypes: {},
  args: {
    size: "medium",
    theme: "primary",
  },
};
