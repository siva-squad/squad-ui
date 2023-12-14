import type { Meta, StoryObj } from "@storybook/react";

import { FavoriteButton } from "./FavoriteButton";

export default {
  component: FavoriteButton,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof FavoriteButton>;

export const Default: StoryObj<typeof FavoriteButton> = {
  args: {},
};


