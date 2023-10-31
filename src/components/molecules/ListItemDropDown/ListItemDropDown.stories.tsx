import { ListItem } from "@components/atoms/ListItem";
import type { Meta, StoryObj } from "@storybook/react";

import { OTHERS_NAVIGATION } from "../MenuList/const";
import { ListItemDropDown } from "./ListItemDropDown";

export default {
  component: ListItemDropDown,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    id: {
      type: "string",
    },
    description: {
      type: "string",
    },
    hasChevron: {
      type: "boolean",
      defaultValue: true,
    },
    href: {
      type: "string",
    },
    icon: {
      type: "symbol",
    },
    isDisabled: {
      type: "boolean",
      defaultValue: false,
    },
    isSelected: {
      type: "boolean",
      defaultValue: false,
    },
    onClick: {
      type: "function",
    },
    selectedIcon: {
      type: "symbol",
    },
    title: {
      type: "string",
    },
    size: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
  },
} satisfies Meta<typeof ListItemDropDown>;

export const Default: StoryObj<typeof ListItemDropDown> = {
  args: {
    title: "その他",
    children: (
      <div className="mt-4 flex flex-col gap-y-2 pl-4">
        {OTHERS_NAVIGATION.map((nav) => (
          <ListItem
            {...nav}
            key={nav.id}
          />
        ))}
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-[15rem]">
        <Story />
      </div>
    ),
  ],
};
