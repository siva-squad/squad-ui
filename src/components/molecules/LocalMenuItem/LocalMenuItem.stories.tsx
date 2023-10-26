import { FolderIcon as FolderIconOutline } from "@heroicons/react/24/outline";
import { FolderIcon as FolderIconSolid } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { LocalMenuItem } from "./LocalMenuItem";

export default {
  component: LocalMenuItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    icon: {
      type: "symbol",
    },
    title: {
      type: "string",
    },
    isDisabled: {
      type: "boolean",
      defaultValue: false,
    },
    isSelected: {
      type: "boolean",
      defaultValue: false,
    },
    onClick: {
      type: "function",
    },
  },
} satisfies Meta<typeof LocalMenuItem>;

export const Default: StoryObj<typeof LocalMenuItem> = {
  args: {
    icon: (
      <FolderIconOutline
        height={16}
        width={16}
      />
    ),
    selectedIcon: (
      <FolderIconSolid
        height={16}
        width={16}
      />
    ),
    title: "フォルダ",
    isDisabled: false,
    isSelected: false,
  },
};
