import type { Meta, StoryObj } from "@storybook/react";

import { MenuList } from "./MenuList";

export default {
  component: MenuList,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    type: {
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
    type: {
      type: "string",
      options: ["beyond", "connection", "account"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    type: "",
  },
};

export const Beyond: StoryObj<typeof MenuList> = {
  args: {
    type: "beyond",
  },
};

export const Connection: StoryObj<typeof MenuList> = {
  args: {
    type: "connection",
  },
};
export const Account: StoryObj<typeof MenuList> = {
  args: {
    type: "account",
  },
};
