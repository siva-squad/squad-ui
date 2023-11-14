import type { Meta, StoryObj } from "@storybook/react";

import { InputElement } from "./InputElement";

export default {
  component: InputElement,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof InputElement>;

export const Default: StoryObj<typeof InputElement> = {
  args: {},
};


