import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

export default {
  component: ProgressBar,
  argTypes: {
    color: {
      options: ["default", "red", "yellow", "orange", "green", "blue", "black", "white", "gray"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "default", "large", "extraLarge"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export const Default: StoryObj<typeof ProgressBar> = {
  args: {
    value: 30,
    color: "yellow",
    size: "large",
  },
};
