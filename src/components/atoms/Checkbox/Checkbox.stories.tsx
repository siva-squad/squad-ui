import { ChangeEvent, ComponentProps, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onChange: {
      action: "change",
    },
    children: {
      type: "string",
    },
    value: {
      type: "string",
    },
    checked: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {};

export const Unchecked: StoryObj<typeof Checkbox> = {
  args: {
    checked: false,
  },
};

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    checked: true,
  },
};

export const WithLabel: StoryObj<typeof Checkbox> = {
  args: {
    children: "Text",
  },
};

export const Controlled = ({
  children,
  value,
  onChange,
  checked,
}: ComponentProps<typeof Checkbox>) => {
  // Actual Use case
  const [isChecked, setIsChecked] = useState(checked);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e);
    setIsChecked((prev) => !prev);
  }

  return (
    <Checkbox
      value={value}
      checked={isChecked}
      onChange={handleOnChange}
    >
      {children}
    </Checkbox>
  );
};
