import type { Meta, StoryObj } from "@storybook/react";

import { AvatarMultiple } from "./AvatarMultiple";

export default {
  component: AvatarMultiple,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof AvatarMultiple>;

export const Default: StoryObj<typeof AvatarMultiple> = {
  args: {
    avatars: [{ id: "xxx", src: "yyy" }],
    onClick: (id) => console.log({ id }),
  },
};
