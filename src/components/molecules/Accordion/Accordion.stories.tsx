import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./";

export default {
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: {
      type: "string",
    },
  },
  args: {
    label: "アコーディオン",
    children: (
      <p className="grid h-40 place-items-center rounded-lg border-2 border-dashed border-primary-600 bg-primary-50 py-4 font-semibold text-blue">
        Hello
      </p>
    ),
  },
} satisfies Meta<typeof Accordion>;

export const Default: StoryObj<typeof Accordion> = {
  args: {},
};

export const Disabled: StoryObj<typeof Accordion> = {
  args: {
    disabled: true,
  },
};
