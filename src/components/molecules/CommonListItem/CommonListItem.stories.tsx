import { FolderIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { CommonListItem } from "./CommonListItem";

export default {
  component: CommonListItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      type: "string",
    },
    icon: {
      type: "symbol",
    },
    onClick: {
      type: "function",
    },
  },
} satisfies Meta<typeof CommonListItem>;

export const Default: StoryObj<typeof CommonListItem> = {
  args: {
    children: "テキストが入ります",
    icon: (
      <FolderIcon
        height={16}
        width={16}
      />
    ),
  },
};
