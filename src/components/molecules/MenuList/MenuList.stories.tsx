import type { Meta, StoryObj } from "@storybook/react";

import { MenuList } from "./MenuList";

export default {
  component: MenuList,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof MenuList>;

export const Default: StoryObj<typeof MenuList> = {
  args: {},
};
