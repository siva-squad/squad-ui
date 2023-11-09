import { Button } from "@components/atoms";
import { MenuListTypeKey } from "@components/molecules/MenuList";
import { ChevronRightIcon, FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { RichMenu } from "./RIchMenu";

const RICH_MENU_TYPES: MenuListTypeKey[] = ["account", "beyond", "connection"];

const commonItems = {
  icon: <FolderIcon />,
  title: "フォルダ名フォルダ名フォルダ名フォルダ名",
  size: "medium",
  hasChevron: false,
  onClick: () => {},
} as const;

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
  },
} satisfies Meta<typeof RichMenu>;

export const Default: StoryObj<typeof RichMenu> = {
  args: {
    isOpen: true,
    navigationType: "beyond",
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
