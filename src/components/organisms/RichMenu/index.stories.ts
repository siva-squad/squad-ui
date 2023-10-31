import { MenuListType } from "@components/molecules/MenuList";
import type { Meta, StoryObj } from "@storybook/react";

import { RichMenu } from "./";

const RICH_MENU_TYPES: MenuListType[] = ["account", "beyond", "connection"];

export default {
  component: RichMenu,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    absolute: {
      type: "boolean",
    },
    isOpen: {
      type: "boolean",
    },
    navigationType: {
      type: "string",
      options: RICH_MENU_TYPES,
      control: {
        type: "select",
      },
    },
    onOpenChange: {
      type: "function",
    },
    type: {
      type: "string",
      options: ["default", "list", "description"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof RichMenu>;

export const Default: StoryObj<typeof RichMenu> = {
  args: {
    isOpen: true,
    navigationType: "beyond",
    type: "default",
  },
};

export const List: StoryObj<typeof RichMenu> = {
  args: {
    isOpen: true,
    navigationType: "beyond",
    type: "list",
  },
};

export const Description: StoryObj<typeof RichMenu> = {
  args: {
    isOpen: true,
    navigationType: "beyond",
    type: "description",
  },
};
