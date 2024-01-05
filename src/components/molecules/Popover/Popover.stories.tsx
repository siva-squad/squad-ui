import { Button } from "@components/atoms";
import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "./Popover";
import { PopoverProps } from "./type";

export default {
  component: Popover,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Popover>;

const positions: PopoverProps["position"][] = [
  "topLeft",
  "top",
  "topRight",
  "rightTop",
  "right",
  "rightBottom",
  "bottomRight",
  "bottom",
  "bottomLeft",
  "leftBottom",
  "left",
  "leftTop",
] as const;

const SampleContent = () => (
  <div className="rounded-lg bg-white p-2 shadow-04">
    <div className="p-2">Text</div>
    <div className="p-2">Text</div>
  </div>
);

export const Default: StoryObj<typeof Popover> = {
  args: {
    children: (
      <Button
        theme="primary"
        size="small"
      >
        Button
      </Button>
    ),
    content: <SampleContent />,
    position: "bottom",
  },
};

const SamplePopover = ({ position }: { position: PopoverProps["position"] }) => (
  <Popover
    id="hover"
    content={<SampleContent />}
    position={position}
  >
    <Button
      theme={"primary"}
      size={"small"}
    >
      {position}
    </Button>
  </Popover>
);

export const All = () => {
  return (
    <div className="flex w-full justify-center">
      <ul className="mt-[200px] flex flex-col gap-[200px]">
        {positions.map((position, index) => (
          <li key={index}>
            <SamplePopover {...{ position }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

All.parameters = {
  pseudo: {
    hover: "#hover",
    focusVisible: "#focus",
  },
};
