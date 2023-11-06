import { ListItemProps } from "@components/atoms/ListItem/type";
import { FolderIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuList } from "./RichMenuList";

const ITEMS: ListItemProps[] = [...Array(15).keys()].map((_, index) => ({
  icon: <FolderIcon />,
  // TODO: ListItemのtruncate対応
  title: "フォルダ名" + index,
  onClick: () => {},
  hasChevron: false,
  size: "medium",
}));

export default {
  component: RichMenuList,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuList>;

export const Default: StoryObj<typeof RichMenuList> = {
  args: {
    title: "最近見た",
    items: ITEMS,
  },
};
