import type { Meta, StoryObj } from "@storybook/react";

import { NestContainer } from "./";

export default {
  component: NestContainer,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof NestContainer>;

export const Default: StoryObj<typeof NestContainer> = {
  args: {
    children: (
      <div className="grid h-20 place-items-center border-2 border-dashed border-primary-600 bg-primary-50 text-sm font-semibold text-primary-600">
        Slot
      </div>
    ),
  },
};
