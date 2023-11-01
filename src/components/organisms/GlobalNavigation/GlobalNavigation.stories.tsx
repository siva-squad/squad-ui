import type { Meta, StoryObj } from "@storybook/react";

import { GlobalNavigation } from "./GlobalNavigation";

export default {
  component: GlobalNavigation,
  parameters: {
    controls: { expanded: true },
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
      { href: "", title: "beyondページ", id: "1", key: "beyond", richMenuType: "default" },
      {
        href: "",
        title: "ドメイン",
        id: "2",
        key: "default",
        richMenuType: "default",
        hasChevron: false,
      },
      { href: "", title: "外部連携", id: "3", key: "connection", richMenuType: "default" },
    ],
  },
};
