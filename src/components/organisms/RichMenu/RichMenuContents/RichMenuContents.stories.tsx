import { ListItemProps } from "@components/atoms/ListItem/type";
import { FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuContents } from "./RichMenuContents";

const LIST_ITEMS: ListItemProps[] = [...Array(15).keys()].map((_, index) => ({
  icon: <FolderIcon />,
  title: "フォルダ名" + index,
  onClick: () => {},
  hasChevron: false,
  size: "medium",
}));

export default {
  component: RichMenuContents,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuContents>;

export const Default: StoryObj<typeof RichMenuContents> = {
  argTypes: {
    richMenuType: {
      type: "string",
      control: {
        type: "disabled",
      },
    },
  },
};

export const List: StoryObj<typeof RichMenuContents> = {
  argTypes: {
    richMenuType: {
      type: "string",
      options: ["list", "default"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    richMenuType: "list",
    listGroup: [
      { items: LIST_ITEMS, title: "もっと見る" },
      {
        items: LIST_ITEMS,
        title: "お気に入り",
        titleIcon: (
          <StarIcon
            className="text-yellow"
            height={12}
            width={12}
          />
        ),
      },
    ],
  },
};

export const Description: StoryObj<typeof RichMenuContents> = {
  argTypes: {
    richMenuType: {
      type: "string",
      options: ["description", "default"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    richMenuType: "description",
    headingText: "一括タグで時間を節約一括タグで時間を節約",
    description:
      "チーム、グループ、フォルダなどに一括でタグを設置することで簡単に管理ができます！チーム、グループ、フォルダなどに一括でタグを設置することで簡単に管理ができます！タグを設置することで簡単に管理ができます！タグを設置することで簡単に管理ができます！",
    imgSrc: "https://placehold.jp/1920x1080.png",
  },
};
