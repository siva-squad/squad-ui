import type { Meta, StoryObj } from "@storybook/react";

import { BreadcrumbItem } from "./BreadcrumbItem";

export default {
  component: BreadcrumbItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof BreadcrumbItem>;

export const Default: StoryObj<typeof BreadcrumbItem> = {
  args: {},
};


