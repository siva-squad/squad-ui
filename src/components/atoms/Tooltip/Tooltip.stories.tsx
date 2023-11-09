import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

export default {
  component: Tooltip,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    tooltipText: { control: "text" },
    ariaLabelledBy: { control: "text" },
    positionToAnchor: { control: "inline-radio", options: ["bottom", "top", "left", "right"] },
    alignment: { control: "inline-radio", options: ["center", "left", "right"] },
  },
  decorators: [
    (Story) => (
      <div className="grid min-h-screen content-center">
        <div>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export const Default: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    tooltipText: "メッセージテキスト",
    positionToAnchor: "top",
    alignment: "left",
    children: "Text",
    ariaLabelledBy: "text-with-tooltip-id",
  },
  decorators: [
    (Story) => (
      <div className="grid min-h-screen content-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export const WithButton: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    tooltipText: "メッセージテキスト",
    positionToAnchor: "right",
    alignment: "center",
    children: (
      <Button
        theme="white"
        size="medium"
      >
        Test
      </Button>
    ),
    ariaLabelledBy: "button-with-tooltip-id",
  },
};

export const WithLink: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    tooltipText: "メッセージテキスト",
    positionToAnchor: "top",
    alignment: "left",
    children: <a href="#">Some link</a>,
    ariaLabelledBy: "link-with-tooltip-id",
  },
};

export const WithIconAnchor: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    tooltipText: "メッセージテキスト",
    positionToAnchor: "top",
    alignment: "left",
    children: <MagnifyingGlassIcon className="h-4 w-4 text-black" />,
    ariaLabelledBy: "icon-with-tooltip-id",
  },
};
