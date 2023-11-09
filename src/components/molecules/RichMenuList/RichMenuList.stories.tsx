import { Button } from "@components/atoms";
import { ChevronRightIcon, FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuList } from "./RichMenuList";

export default {
  component: RichMenuList,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuList>;

const commonItems = {
  icon: <FolderIcon />,
  title: "フォルダ名",
  size: "medium",
  hasChevron: false,
  onClick: () => {},
} as const;

export const Default: StoryObj<typeof RichMenuList> = {
  args: {
    onViewAllFolders: () => console.log("clicked"),
    groups: [
      {
        id: "1",
        title: "最近見た",
        items: [...Array(10)].map(() => commonItems),
      },
      {
        id: "2",
        title: "お気に入り",
        titleIcon: (
          <StarIcon
            height={12}
            width={12}
            className="text-yellow"
          />
        ),
        items: [...Array(10)].map(() => commonItems),
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
      },
    ],
  },
};
