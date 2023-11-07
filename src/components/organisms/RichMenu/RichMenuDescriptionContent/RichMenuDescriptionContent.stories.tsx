import type { Meta, StoryObj } from "@storybook/react";

import { RichMenuDescriptionContent } from "./RichMenuDescriptionContent";

export default {
  component: RichMenuDescriptionContent,
  parameters: {
    controls: { expanded: true },
    chromatic: { disableSnapshot: true },
  },
  argTypes: {},
} satisfies Meta<typeof RichMenuDescriptionContent>;

export const Default: StoryObj<typeof RichMenuDescriptionContent> = {
  args: {
    headingText: "一括タグで時間を節約一括タグで時間を節約",
    description:
      "チーム、グループ、フォルダなどに一括でタグを設置することで簡単に管理ができます！チーム、グループ、フォルダなどに一括でタグを設置することで簡単に管理ができます！タグを設置することで簡単に管理ができます！タグを設置することで簡単に管理ができます！",
    imgSrc: "https://placehold.jp/1920x1080.png",
  },
};
