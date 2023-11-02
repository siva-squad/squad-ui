import type { Meta, StoryObj } from "@storybook/react";

import { GlobalSidebar } from "./";

export default {
  component: GlobalSidebar,
  parameters: {
    controls: { expanded: true },
    layout: "fullscreen",
  },
  argTypes: {
    items: {
      type: "symbol",
    },
    isOpen: {
      type: "boolean",
    },
    onClose: {
      type: "function",
    },
  },
} satisfies Meta<typeof GlobalSidebar>;

export const Default: StoryObj<typeof GlobalSidebar> = {
  args: {
    items: [
      {
        href: "#",
        title: "ダッシュボード",
        id: "1",
        navigationType: "default",
        richMenuType: "default",
        hasChevron: false,
      },
      {
        href: "",
        title: "beyondページ",
        id: "2",
        navigationType: "beyond",
        richMenuType: "default",
      },
      {
        href: "#",
        title: "ドメイン",
        id: "3",
        navigationType: "default",
        richMenuType: "default",
        hasChevron: false,
      },
      {
        href: "",
        title: "外部連携",
        id: "4",
        navigationType: "connection",
        richMenuType: "default",
      },
    ],
  },
};
