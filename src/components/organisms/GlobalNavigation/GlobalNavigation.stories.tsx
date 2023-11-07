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
    selectedId: {
      type: "string",
    },
  },
} satisfies Meta<typeof GlobalNavigation>;

export const Default: StoryObj<typeof GlobalNavigation> = {
  args: {
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
