import type { Meta, StoryObj } from "@storybook/react";

import { BrandLogo } from "./";

export default {
  component: BrandLogo,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    height: {
      type: "number",
    },
    width: {
      type: "number",
    },
    href: {
      type: "string",
    },
  },
} satisfies Meta<typeof BrandLogo>;

export const Default: StoryObj<typeof BrandLogo> = {
  args: {
    height: 40,
    width: 40,
    href: "",
  },
};
