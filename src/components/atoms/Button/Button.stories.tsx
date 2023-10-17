import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  argTypes: {},
  args: {
    children: "ボタン",
  },
};
