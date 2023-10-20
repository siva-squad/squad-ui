import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./Toggle";
import { ToggleProps } from "./type";

/**
 * Toggle自身が状態を持たないため、ラップして状態を渡す
 * Wrap and pass the state to Toggle, Because it does not have a state.
 */
const LocalComponent = ({ value, onToggle, ...props }: ToggleProps) => {
  const [localState, setLocalState] = useState(value);
  return (
    <Toggle
      value={localState}
      onToggle={(e) => {
        setLocalState(!localState);
        onToggle(e);
      }}
      {...props}
    />
  );
};

export default {
  component: LocalComponent,
  argTypes: {
    onToggle: { action: "onToggle" },
  },
  args: {
    value: true,
    disabled: undefined,
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Toggle>;

export const Default: StoryObj<typeof Toggle> = {
  name: "基本系",
  args: {
    value: true,
  },
};

export const Disabled: StoryObj<typeof Toggle> = {
  name: "非アクティブ",
  args: {
    value: true,
    disabled: true,
  },
};
