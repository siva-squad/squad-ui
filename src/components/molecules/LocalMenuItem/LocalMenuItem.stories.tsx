import { TvIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { LocalMenuItem } from "./LocalMenuItem";

export default {
  component: LocalMenuItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof LocalMenuItem>;

export const Default: StoryObj<typeof LocalMenuItem> = {
  args: {
    icon: (
      <TvIcon
        height={16}
        width={16}
      />
    ),
    title: "フォルダ",
  },
};
