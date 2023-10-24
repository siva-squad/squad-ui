import { FolderIcon as FolderIconOutline } from "@heroicons/react/24/outline";
import { FolderIcon as FolderIconSolid } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuListItem } from "./MenuListItem";

export default {
  component: MenuListItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof MenuListItem>;

export const Dropdown: StoryObj<typeof MenuListItem> = {
  args: {
    children: "ダッシュボード",
    type: "dropdown",
    disabled: false,
    selected: false,
  },
};

export const Header: StoryObj<typeof MenuListItem> = {
  args: {
    children: "フォルダ",
    type: "header",
    description: "beyondページが一覧としてみれます",
    icon: <FolderIconOutline />,
    selectedIcon: <FolderIconSolid />,
    href: "",
  },
};
