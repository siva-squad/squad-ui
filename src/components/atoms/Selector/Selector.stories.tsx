import type { StoryObj, Meta } from "@storybook/react";
import { Selector } from "./Selector";

export default {
  component: Selector,
} satisfies Meta<typeof Selector>;

export const Default: StoryObj<typeof Selector> = {
  argTypes: {
    onSelect: { action: "onSelect" },
  },
  args: {
    disabled: false,
    size: "normal",
    defaultLabel: "選択肢が入ります",
    options: [
      {
        id: 1,
        label: "オプション1",
        value: "option1",
      },
      {
        id: 2,
        label: "オプション2",
        value: "option2",
      },
      {
        id: 3,
        label: "オプション3",
        value: "option3",
      },
    ],
  },
};

export const Groups = () => {
  const options = [
    {
      id: 1,
      label: "オプション1",
      value: "option1",
    },
    {
      id: 2,
      label: "オプション2",
      value: "option2",
    },
  ];
  return (
    <div className="flex flex-col gap-y-20">
      <Selector
        options={options}
        defaultLabel="選択肢が入ります"
        size="normal"
        disabled={false}
        onSelect={() => {}}
      />
      <Selector
        options={options}
        defaultLabel="選択肢が入ります"
        size="normal"
        disabled={false}
        onSelect={() => {}}
      />
    </div>
  );
};
