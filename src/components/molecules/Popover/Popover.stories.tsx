import { useState } from "react";
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
];

const SampleContent = () => (
  <div className="rounded-lg bg-white p-2 shadow-04">
    <span>Content</span>
  </div>
);

const WithStateComponent = (props: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  return (
    <Popover
      {...props}
      isOpen={isOpen}
    >
      <Button
        theme="primary"
        variant="fill"
        size="small"
        onClick={() => props.mode === "click" && setIsOpen((prev) => !prev)}
      >
        Button
      </Button>
    </Popover>
  );
};

export const Default: StoryObj<typeof Popover> = {
  args: {
    content: <SampleContent />,
    position: "bottom",
    mode: "hover",
    isOpen: false,
  },
  render: (args) => <WithStateComponent {...args} />,
};

const SamplePopover = ({ position }: { position: PopoverProps["position"] }) => (
  <Popover
    id="hover"
    content={<SampleContent />}
    position={position}
  >
    <Button
      theme="primary"
      variant="fill"
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
