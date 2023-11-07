import { ListItemProps } from "@components/atoms/ListItem/type";
import { MenuListTypeKey } from "@components/molecules/MenuList";
import { FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { RichMenu } from ".";

const RICH_MENU_TYPES: MenuListTypeKey[] = ["account", "beyond", "connection"];

const LIST_ITEMS: ListItemProps[] = [...Array(15).keys()].map((_, index) => ({
  icon: <FolderIcon />,
  title: "フォルダ名" + index,
  onClick: () => {},
  hasChevron: false,
  size: "medium",
}));

export default {
  component: RichMenu,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    absolute: {
      type: "boolean",
    },
    isOpen: {
      type: "boolean",
    },
    navigationType: {
      type: "string",
      options: RICH_MENU_TYPES,
      control: {
        type: "select",
      },
    },
    onOpenChange: {
      type: "function",
    },
    richMenuType: {
      type: "string",
      options: ["default", "list", "description"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof RichMenu>;

export const Default: StoryObj<typeof RichMenu> = {
  args: {
    isOpen: true,
    navigationType: "beyond",
    richMenuType: "default",
  },
};

export const List: StoryObj<typeof RichMenu> = {
  args: {
    isOpen: true,
    navigationType: "beyond",
    richMenuType: "list",
    listGroup: [
      {
        items: LIST_ITEMS,
        title: "もっと見る",
      },
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

export const Description: StoryObj<typeof RichMenu> = {
  args: {
    isOpen: true,
    navigationType: "beyond",
    richMenuType: "description",
    headingText: "一括タグで時間を節約一括タグで時間を節約",
    description:
      "チーム、グループ、フォルダなどに一括でタグを設置することで簡単に管理ができます！チーム、グループ、フォルダなどに一括でタグを設置することで簡単に管理ができます！タグを設置することで簡単に管理ができます！タグを設置することで簡単に管理ができます！",
    imgSrc: "https://placehold.jp/1920x1080.png",
  },
};
