import type { Meta, StoryObj } from "@storybook/react";

import { RequiredBadge } from "./RequiredBadge";

export default {
  component: RequiredBadge,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    isRequired: {
      type: "boolean",
    },
    optionalText: {
      type: "string",
    },
    requiredText: {
      type: "string",
    },
  },
} satisfies Meta<typeof RequiredBadge>;

export const Optional: StoryObj<typeof RequiredBadge> = {
  args: {
    isRequired: false,
  },
};

export const Required: StoryObj<typeof RequiredBadge> = {
  args: {
    isRequired: true,
  },
};
