import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "./Breadcrumbs";

export default {
  component: Breadcrumbs,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Breadcrumbs>;

export const Default: StoryObj<typeof Breadcrumbs> = {
  args: {},
};


