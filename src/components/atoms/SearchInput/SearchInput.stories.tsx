import type { Meta, StoryObj } from "@storybook/react";

import { SearchInput } from "./SearchInput";

export default {
  component: SearchInput,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof SearchInput>;

export const Default: StoryObj<typeof SearchInput> = {
  argTypes: {
    onChange: { action: "search" },
    inputSize: {
      options: ["normal", "small"],
      control: { type: "radio" },
    },
    inputStyle: {
      options: ["filled", "outline"],
      control: { type: "radio" },
    },
    placeholder: { control: "text" },
  },
  args: {
    inputSize: "normal",
    inputStyle: "filled",
  },
};
