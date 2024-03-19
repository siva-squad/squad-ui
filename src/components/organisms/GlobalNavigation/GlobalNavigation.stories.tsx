import { StarIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { GlobalNavigation } from "./GlobalNavigation";

export default {
  component: GlobalNavigation,
  parameters: {
    controls: { expanded: true },
    layout: "fullscreen",
  },
  argTypes: {
    items: {
      type: "symbol",
    },
    onChangeSelectedId: {
      type: "function",
    },
    onClickAccountMenu: {
      type: "function",
    },
    selectedId: {
      type: "string",
    },
    userId: {
      type: "string",
    },
    userImage: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    teamName: {
      type: "string",
    },
  },
  args: {
    userId: "1",
    userName: "田中太郎",
    userImage: "https://via.placeholder.com/100",
    teamName: "Squad Beyond",
  },
} satisfies Meta<typeof GlobalNavigation>;

export const Default: StoryObj<typeof GlobalNavigation> = {
  args: {
    groups: [
      {
        title: "最近見た",
        id: "1",
        items: [],
      },
      {
        title: "お気に入り",
        titleIcon: (
          <StarIcon
            height={12}
            width={12}
            className="text-yellow"
          />
        ),
        id: "2",
        items: [],
      },
    ],
    items: [
      {
        href: "#",
        title: "ダッシュボード",
        id: "1",
        navigationType: "default",
        hasChevron: false,
      },
      {
        href: "",
        title: "beyondページ",
        id: "2",
        navigationType: "beyond",
      },
      {
        href: "#",
        title: "ドメイン",
        id: "3",
        navigationType: "default",
        hasChevron: false,
      },
      {
        href: "",
        title: "外部連携",
        id: "4",
        navigationType: "connection",
      },
    ],
  },
};

export const Simplified: StoryObj<typeof GlobalNavigation> = {
  args: {
    groups: [],
    items: [
      {
        href: "#",
        title: "ダッシュボード",
        id: "1",
        navigationType: "default",
        hasChevron: false,
      },
      {
        href: "",
        title: "beyondページ",
        id: "2",
        navigationType: "beyond",
      },
      {
        href: "#",
        title: "ドメイン",
        id: "3",
        navigationType: "default",
        hasChevron: false,
      },
      {
        href: "",
        title: "外部連携",
        id: "4",
        navigationType: "connection",
      },
    ],
    hasOnlyLogo: true,
  },
};
