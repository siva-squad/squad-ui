import { Button } from "@components/atoms";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { ChevronRightIcon, FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuListContent } from "./RichMenuListContent";

const ITEMS: ListItemProps[] = [...Array(15).keys()].map((_, index) => ({
  icon: <FolderIcon />,
  title: "フォルダ名フォルダ名フォルダ名フォルダ名" + index,
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
        bottomButton: (
          <Button
            theme="no-background"
            size="small"
            iconPosition="right"
            icon={<ChevronRightIcon />}
          >
            すべてのお気に入りを見る
          </Button>
        ),
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
