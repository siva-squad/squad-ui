import type { Meta, StoryObj } from "@storybook/react";
import { TabArea } from "../TabArea/TabArea";
import { TabNavigation } from "./TabNavigation";

export default {
  component: TabNavigation,
  parameters: {
    controls: { expanded: true },
  },
  args: {
    tabs: [
      {
        label: "page1",
        pageId: 1,
      },
      {
        label: "page2",
        pageId: 2,
      },
    ],
  },
  argTypes: {
    activeBorderColor: {
      type: "string",
      options: ["black"],
      control: {
        type: "radio",
      },
      defaultValue: "black",
    },
    activeTextColor: {
      type: "string",
      options: ["black"],
      control: {
        type: "radio",
      },
      defaultValue: "black",
    },
    backgroundColor: {
      type: "string",
      options: ["transparent", "white"],
      control: {
        type: "radio",
      },
      defaultValue: "transparent",
    },
    passiveBorderColor: {
      type: "string",
      options: ["gray"],
      control: {
        type: "radio",
      },
      defaultValue: "gray",
    },
    passiveTextColor: {
      type: "string",
      options: ["gray"],
      control: {
        type: "radio",
      },
      defaultValue: "gray",
    },
  },
  decorators: [
    (Story) => (
      <TabArea>
        <Story />
      </TabArea>
    ),
  ],
} satisfies Meta<typeof TabNavigation>;

export const Default: StoryObj = {};
