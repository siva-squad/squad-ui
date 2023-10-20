import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from "./RadioButton";

export default {
  component: RadioButton,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof RadioButton>;

export const Default: StoryObj<typeof RadioButton> = {
  argTypes: {
    name: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
};

const RADIO_GROUP_ITEM = {
  name: "fruits",
  items: ["apple", "orange"],
};

export const Groups = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="flex items-center gap-x-2">
      {RADIO_GROUP_ITEM.items.map((value) => (
        <RadioButton
          checked={selected === value}
          name={RADIO_GROUP_ITEM.name}
          value={value}
          onChange={(e) => setSelected(e.target.value)}
          key={value}
        >
          {value}
        </RadioButton>
      ))}
    </div>
  );
};
