import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";

import { within, userEvent } from "@storybook/testing-library";

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

export const DefaultOnHover: StoryObj<typeof Tooltip> = {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltipAnchor = canvas.getByTestId("tooltip-anchor");

    await userEvent.hover(tooltipAnchor);
    const tooltip = canvas.getByRole("tooltip");

    await expect(tooltip).toBeInTheDocument();
    await expect(tooltipAnchor).toHaveAccessibleName("メッセージテキスト");
    await expect(tooltip).toHaveAttribute("aria-hidden", "false");

    await userEvent.unhover(tooltipAnchor);
    await expect(tooltip).not.toBeInTheDocument();
  },
};

export const DefaultOnTab: StoryObj<typeof Tooltip> = {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltipAnchor = canvas.getByTestId("tooltip-anchor");

    await userEvent.tab();

    const tooltip = canvas.getByRole("tooltip");

    await expect(tooltip).toBeInTheDocument();
    await expect(tooltipAnchor).toHaveAccessibleName("メッセージテキスト");
    await expect(tooltip).toHaveAttribute("aria-hidden", "false");

    await userEvent.tab();
    await expect(tooltip).not.toBeInTheDocument();
  },
};

export const FocusOnButton: StoryObj<typeof Tooltip> = {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltipAnchor = canvas.getByTestId("tooltip-anchor");
    const button = canvas.getByRole("button");

    await userEvent.keyboard("{Tab}");

    await expect(tooltipAnchor).not.toHaveFocus();
    await expect(button).toHaveFocus();
  },
};

export const FocusOnLink: StoryObj<typeof Tooltip> = {
  argTypes: {},
  args: {
    tooltipText: "メッセージテキスト",
    positionToAnchor: "top",
    alignment: "left",
    children: <a href="#">Some link</a>,
    ariaLabelledBy: "link-with-tooltip-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltipAnchor = canvas.getByTestId("tooltip-anchor");
    const link = canvas.getByRole("link");

    await userEvent.keyboard("{Tab}");

    await expect(tooltipAnchor).not.toHaveFocus();
    await expect(link).toHaveFocus();
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
