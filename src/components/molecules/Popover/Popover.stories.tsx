import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "./Popover";

export default {
  component: Popover,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Popover>;

export const Default: StoryObj<typeof Popover> = {
  args: {
    children: "...",
    content: (
      <div className="rounded-lg bg-white p-2 shadow-04">
        <div className="p-2">サンプルテキスト</div>
        <div className="p-2">サンプルテキスト</div>
        <div className="p-2">サンプルテキスト</div>
      </div>
    ),
  },
};
