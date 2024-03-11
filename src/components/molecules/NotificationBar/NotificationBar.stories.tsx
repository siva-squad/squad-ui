import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBar } from "./NotificationBar";

const meta: Meta<typeof NotificationBar> = {
  component: NotificationBar,
  argTypes: {
    status: {
      options: ["success", "info", "warning", "error"],
      control: { type: "radio" },
    },
    notificationText: { control: "text" },
    buttonText: { control: "text" },
    onClose: { action: "closed" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof NotificationBar>;

export const Primary: Story = {
  args: {
    status: "success",
    notificationText: "テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};

export const WithButton: Story = {
  args: {
    status: "success",
    notificationText: "テキストが入ります。テキストが入ります。テキストが入ります。",
    buttonText: "ボタン",
  },
};
