import type { Meta, StoryObj } from "@storybook/react";

import { Area } from "./Area";

export default {
  component: Area,
  args: {
    children: "With a little bit of text",
    color: "lightGray",
  },
} satisfies Meta<typeof Area>;

export const Default: StoryObj<typeof Area> = {
  args: {
    width: "full",
    children: "With a little bit of text",
  },
};
