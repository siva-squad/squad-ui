import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";
import { THEMES } from "./const";
import { COLORS } from "@/src/const/colors";

export default {
  component: Badge,
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export const Default: StoryObj<typeof Badge> = {
  argTypes: {
    color: {
      options: COLORS,
      control: { type: "select" },
    },
    theme: {
      options: THEMES,
      control: { type: "select" },
    },
  },
  args: {
    children: "HELLO",
    color: "primary",
    theme: "border",
  },
};

const allBadges = COLORS.map((color) => (
  <div
    key={color}
    className="flex flex-col gap-y-6"
  >
    {THEMES.map((theme) => (
      <Badge
        key={`${color}-${theme}`}
        theme={theme}
        color={color}
      >
        {/* Capitalizing first letter */}
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </Badge>
    ))}
  </div>
));

export const All = () => {
  return <div className="flex gap-x-9">{allBadges}</div>;
};
