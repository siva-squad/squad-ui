import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const MOCK_AVATAR_SRC = "https://ui-avatars.com/api?background=random&color=FFF";

export default {
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      type: "number",
      defaultValue: 32,
    },
  },
} satisfies Meta<typeof Avatar>;

export const Default: StoryObj<typeof Avatar> = {
  args: {
    src: MOCK_AVATAR_SRC,
  },
};

export const NoSrc: StoryObj<typeof Avatar> = {};

export const UnClickable: StoryObj<typeof Avatar> = {
  args: {
    src: MOCK_AVATAR_SRC,
    onClick: undefined,
  },
};
