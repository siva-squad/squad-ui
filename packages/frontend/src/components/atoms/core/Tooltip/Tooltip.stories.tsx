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
    direction: { control: "inline-radio", options: ["bottom", "top", "left", "right"] },
    position: { control: "inline-radio", options: ["center", "left", "right"] },
  },
  decorators: [
    (Story) => (
      <div className="grid min-h-screen content-center">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into <Story /> electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.bled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <Story />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export const Default: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    tooltipText: "メッセージテキスト",
    direction: "top",
    position: "left",
    children: (
      <Button
        theme="white"
        size="medium"
      >
        Test
      </Button>
    ),
  },
};

export const LongText: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    tooltipText: "メッセージテキスト",
    direction: "top",
    position: "left",
    children: "This is some very long text",
  },
};

export const LongTooltipText: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    tooltipText:
      "メッセージテキストメッセージテキストメッセージテキストメッセージテキストメッセージテキストメッセージテキストメッセージテキストメッセージテキストメッセージテキスト",
    direction: "right",
    position: "center",
    children: (
      <Button
        theme="white"
        size="medium"
      >
        Test
      </Button>
    ),
  },
};
