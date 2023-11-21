import type { Meta, StoryObj } from "@storybook/react";

import { BaseModal } from "./BaseModal";

export default {
  component: BaseModal,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof BaseModal>;

export const Default: StoryObj<typeof BaseModal> = {
  args: {},
};


