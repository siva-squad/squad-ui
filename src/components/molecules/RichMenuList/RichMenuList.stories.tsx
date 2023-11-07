import { FolderIcon } from "@heroicons/react/24/outline";
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

export const Default: StoryObj<typeof RichMenuList> = {
  args: {
    groups: [
      {
        id: "1",
        title: "最近見た",
        items: [
          {
            icon: <FolderIcon />,
            title: "フォルダ名",
            size: "medium",
            hasChevron: false,
            onClick: () => {},
          },
        ],
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
        items: [
          {
            icon: <FolderIcon />,
            title: "フォルダ名",
            size: "medium",
            hasChevron: false,
            onClick: () => {},
          },
        ],
      },
    ],
  },
};
