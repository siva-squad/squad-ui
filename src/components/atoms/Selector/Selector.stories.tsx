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
    placeholder: "選択肢が入ります",
    options: new Array(10).fill(null).map((_, index) => ({
      label: `オプション_${index}`,
      value: `option_${index}`,
    })),
  },
};

export const Groups = () => {
  const options = [
    {
      label: "オプション1",
      value: "option1",
    },
    {
      label: "オプション2",
      value: "option2",
    },
  ];
  return (
    <div className="flex flex-col gap-y-20">
      <Selector
        options={[
          {
            label: "オプション1",
            value: "option1",
          },
          {
            label: "オプション2",
            value: "option2",
          },
        ]}
        value={"option1"}
        placeholder="選択肢が入ります"
        size="normal"
        disabled={false}
        onSelect={() => {}}
      />
      <Selector
        options={options}
        placeholder="選択肢が入ります"
        size="normal"
        disabled={false}
        onSelect={() => {}}
      />
    </div>
  );
};
