import { EyeIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuListItem } from "./MenuListItem";

export default {
  component: MenuListItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof MenuListItem>;

export const Default: StoryObj<typeof MenuListItem> = {
  args: {
    children: "ダッシュボード",
    description: "beyondページが一覧としてみれます",
    chevron: true,
    disabled: false,
    selected: false,
    icon: <FaceSmileIcon />,
    selectedIcon: <EyeIcon />,
  },
};
