import type { Meta, StoryObj } from "@storybook/react";

import { AvatarMultiple } from "./AvatarMultiple";

export default {
  component: AvatarMultiple,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onClick: { action: "clicked" },
    avatars: {
      type: "symbol",
    },
    maxDisplayCount: {
      type: "number",
    },
    showIndicator: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof AvatarMultiple>;

export const Default: StoryObj<typeof AvatarMultiple> = {
  args: {
    avatars: Array.from({ length: 12 }).map((_, i) => ({
      id: i.toString(),
      src: i.toString(),
    })),
  },
};
