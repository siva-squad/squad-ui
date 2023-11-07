import { ListItemProps } from "@components/atoms/ListItem/type";
import { FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuListContent } from "./RichMenuListContent";

const ITEMS: ListItemProps[] = [...Array(15).keys()].map((_, index) => ({
  icon: <FolderIcon />,
  // TODO: ListItemのtruncate対応
  title: "フォルダ名" + index,
  onClick: () => {},
  hasChevron: false,
  size: "medium",
}));

export default {
  component: RichMenuListContent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuListContent>;

export const Default: StoryObj<typeof RichMenuListContent> = {
  args: {
    listGroup: [
      {
        items: ITEMS,
        title: "最近見た",
      },
      {
        items: ITEMS,
        title: "お気に入り",
        titleIcon: (
          <StarIcon
            className="text-yellow"
            width={12}
            height={12}
          />
        ),
      },
    ],
  },
};
