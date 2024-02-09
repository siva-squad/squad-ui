import type { Meta, StoryObj } from "@storybook/react";

import { AvatarMultiple } from "./AvatarMultiple";

export default {
  component: AvatarMultiple,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onClick: { action: "clicked" },
    avatars: {
      type: "symbol",
    },
    maxDisplayCount: {
      type: "number",
    },
    showIndicator: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof AvatarMultiple>;

const generateMockAvatarUrl = (i: number) => {
  return `https://ui-avatars.com/api?background=random&color=FFF&name=${
    String.fromCharCode(i + 65) + String.fromCharCode(i + 66)
  }`;
};

export const Default: StoryObj<typeof AvatarMultiple> = {
  args: {
    avatars: Array.from({ length: 12 }).map((_, i) => ({
      id: i.toString(),
      src: generateMockAvatarUrl(i),
    })),
  },
};

export const NoSrc: StoryObj<typeof AvatarMultiple> = {
  args: {
    avatars: Array.from({ length: 12 }).map((_, i) => ({
      id: i.toString(),
    })),
  },
};

export const NoIndicator: StoryObj<typeof AvatarMultiple> = {
  args: {
    avatars: Array.from({ length: 12 }).map((_, i) => ({
      id: i.toString(),
      src: generateMockAvatarUrl(i),
    })),
    showIndicator: false,
  },
};

export const NoHover: StoryObj<typeof AvatarMultiple> = {
  args: {
    avatars: Array.from({ length: 12 }).map((_, i) => ({
      id: i.toString(),
      src: generateMockAvatarUrl(i),
    })),
    showBackgroundHover: false,
  },
};
