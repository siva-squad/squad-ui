import type { Meta, StoryObj } from "@storybook/react";

import { MenuList } from "./MenuList";

export default {
  component: MenuList,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    navigationType: {
      type: "string",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-fit">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuList>;

export const Default: StoryObj<typeof MenuList> = {
  argTypes: {
    navigationType: {
      type: "string",
      options: ["beyond", "connection", "account"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    navigationType: "",
  },
};

export const Beyond: StoryObj<typeof MenuList> = {
  args: {
    navigationType: "beyond",
  },
};

export const Connection: StoryObj<typeof MenuList> = {
  args: {
    navigationType: "connection",
  },
};
export const Account: StoryObj<typeof MenuList> = {
  args: {
    navigationType: "account",
  },
};
